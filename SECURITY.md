# Security Implementation: Contact Form Protection

## Overview
This document outlines the security measures implemented to protect against mailbombing and other abuse of the contact form.

## Changes Made

### 1. Backend API Endpoint (`src/pages/api/contact.js`)
- **Location**: `/api/contact`
- **Method**: POST only
- **Purpose**: Centralized contact form processing with security checks
- **Security Features**:
  - Email address hidden from frontend
  - Server-side validation and sanitization
  - Rate limiting enforcement
  - Input validation (length, format, content)
  - XSS prevention (HTML sanitization)

### 2. Rate Limiting (`src/utils/rateLimiter.js`)
- **Per IP Address**: Tracks requests by client IP
- **Hourly Limit**: 5 requests per hour (configurable)
- **Daily Limit**: 20 requests per day (configurable)
- **Response**: Returns HTTP 429 with Retry-After header
- **Memory**: In-memory storage with automatic cleanup

**Configuration** (`.env`):
```
RATE_LIMIT_REQUESTS_PER_HOUR=5
RATE_LIMIT_REQUESTS_PER_DAY=20
```

### 3. Input Validation & Sanitization
- Email format validation (RFC-compliant)
- Required field validation (name, email, message)
- HTML entity encoding (prevents script injection)
- Length limits on all inputs (max 1000 chars)
- Minimum message length (5 characters)
- Character filtering for special characters

### 4. Environment Configuration (`.env`)
```
PUBLIC_CONTACT_EMAIL=jaimevillalcon@hotmail.com
FORMSUBMIT_EMAIL=jaimevillalcon@hotmail.com
RATE_LIMIT_REQUESTS_PER_HOUR=5
RATE_LIMIT_REQUESTS_PER_DAY=20
```

**Important**:
- Add `.env` to `.gitignore` (keep sensitive data off git)
- Update `.env` on server manually or via secure deployment

### 5. Frontend Changes (`src/components/Contact.jsx`)
- Updated to POST to `/api/contact` instead of FormSubmit directly
- Added form clearing after successful submission
- Improved error message handling
- Better error feedback from server

### 6. Deployment Configuration
- **Astro Mode**: Changed to `output: "server"` for API route support
- **Process Manager**: PM2 keeps Node.js app running
- **Deploy Script**: Updated to manage PM2 process lifecycle

## Security Architecture

```
User Browser
    ↓
Form Submit (POST /api/contact)
    ↓
Rate Limiter (check IP limits)
    ↓
Input Validation & Sanitization
    ↓
FormSubmit Service (hidden email)
    ↓
Your Mailbox (protected)
```

## API Response Examples

### Success (200 OK)
```json
{
  "success": true,
  "message": "Email sent successfully",
  "remaining": {
    "hourly": 4,
    "daily": 19
  }
}
```

### Rate Limited (429 Too Many Requests)
```json
{
  "success": false,
  "error": "Too many requests. Please try again later.",
  "reason": "hourly_limit_exceeded"
}
```
Header: `Retry-After: 3600` (seconds)

### Validation Error (400 Bad Request)
```json
{
  "success": false,
  "error": "Invalid email format"
}
```

## Testing

### Local Testing
```bash
npm run dev
# Visit http://localhost:3000
# Test contact form at /api/contact
```

### Rate Limit Testing
```bash
# Make 6 rapid requests - 6th should fail with 429
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"test message","phone":""}'
```

## Deployment

### Prerequisites
- PM2 installed on server: `npm install -g pm2`
- Node.js and npm available

### Deploy Process
```bash
./deploy.sh
```

This will:
1. Push code to git
2. Pull latest on server
3. Install dependencies
4. Build with Astro (server mode)
5. Start/restart Node.js app with PM2
6. Restart nginx

### Server Configuration (nginx)

Example nginx configuration to proxy requests:
```nginx
server {
    listen 80;
    server_name jaimedigitalstudio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Future Enhancements

Consider implementing:
1. **CAPTCHA Integration**: Add reCAPTCHA v3 for bot detection
2. **Redis Rate Limiter**: Replace in-memory with Redis for multi-instance scaling
3. **Email Verification**: Confirm sender email address
4. **Spam Detection**: Implement Akismet or similar service
5. **Request Logging**: Log submissions for audit trail
6. **Webhook Notifications**: Real-time alerts on contact form submission

## Monitoring

### Check PM2 Status
```bash
pm2 status
pm2 logs jaimedigitalstudio
pm2 monit
```

### Check API Health
```bash
curl http://jaimedigitalstudio.com/api/contact -X GET
# Should return 405 Method Not Allowed
```

## Security Notes

- ✅ Email hidden from source code
- ✅ Rate limiting prevents spam/mailbombing
- ✅ Input sanitization prevents injection attacks
- ✅ Server-side validation (cannot be bypassed)
- ✅ API endpoint not exposed in frontend
- ✅ Process manager ensures uptime

## Troubleshooting

### API returns 500 error
- Check PM2 logs: `pm2 logs jaimedigitalstudio`
- Verify .env file exists on server
- Check FORMSUBMIT_EMAIL is set correctly

### Rate limiting too strict
- Edit `.env` on server and adjust limits
- Restart PM2: `pm2 restart jaimedigitalstudio`

### Form submissions not working
- Check browser console for errors
- Verify `/api/contact` is accessible
- Check nginx proxy configuration

## References
- [Astro API Routes](https://docs.astro.build/en/core-concepts/endpoints/)
- [PM2 Documentation](https://pm2.keymetrics.io/)
- [FormSubmit Documentation](https://formsubmit.co/)
