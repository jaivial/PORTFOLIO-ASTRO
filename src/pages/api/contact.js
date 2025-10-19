import { checkRateLimit } from '../../utils/rateLimiter.js';

// Validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Sanitize input to prevent injection attacks
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .substring(0, 1000) // Limit length
    .replace(/[<>\"']/g, (char) => {
      const map = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
      return map[char];
    });
}

export async function POST({ request }) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
               request.headers.get('cf-connecting-ip') ||
               request.socket?.remoteAddress ||
               'unknown';

    // Check rate limiting
    const rateLimitResult = checkRateLimit(
      ip,
      parseInt(import.meta.env.RATE_LIMIT_REQUESTS_PER_HOUR || 5),
      parseInt(import.meta.env.RATE_LIMIT_REQUESTS_PER_DAY || 20)
    );

    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Too many requests. Please try again later.',
          reason: rateLimitResult.reason
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': rateLimitResult.retryAfter
          }
        }
      );
    }

    // Parse request body
    const body = await request.json();
    const { name, email, message, phone } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Missing required fields'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid email format'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      message: sanitizeInput(message),
      phone: sanitizeInput(phone || '')
    };

    // Check for spam patterns
    const messageLength = sanitizedData.message.length;
    if (messageLength < 5) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Message must be at least 5 characters'
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Forward to FormSubmit (your backend email service)
    const formsubmitEmail = import.meta.env.FORMSUBMIT_EMAIL;
    const isDev = import.meta.env.DEV;

    // In development, skip actual email sending (just validate)
    if (isDev) {
      console.log('📧 [DEV MODE] Contact form data (email not sent):');
      console.log('Name:', sanitizedData.name);
      console.log('Email:', sanitizedData.email);
      console.log('Message:', sanitizedData.message);
      console.log('Phone:', sanitizedData.phone);

      return new Response(
        JSON.stringify({
          success: true,
          message: 'Email validation successful (dev mode - not actually sent)',
          remaining: rateLimitResult.remaining,
          dev: true
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // In production, send to FormSubmit
    const response = await fetch('https://formsubmit.co/ajax/' + formsubmitEmail, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sanitizedData)
    });

    if (!response.ok) {
      console.error('FormSubmit error:', response.status);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to send message'
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        remaining: rateLimitResult.remaining
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function GET() {
  return new Response(
    JSON.stringify({ error: 'Method not allowed' }),
    { status: 405, headers: { 'Content-Type': 'application/json' } }
  );
}
