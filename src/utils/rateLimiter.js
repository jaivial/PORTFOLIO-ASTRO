// Simple in-memory rate limiter
// For production, consider using Redis
const store = new Map();

const HOUR = 60 * 60 * 1000;
const DAY = 24 * 60 * 60 * 1000;

export function getRateLimitKey(ip) {
  return `rate-limit:${ip}`;
}

export function checkRateLimit(ip, maxPerHour = 5, maxPerDay = 20) {
  const now = Date.now();
  const key = getRateLimitKey(ip);

  if (!store.has(key)) {
    store.set(key, {
      hourly: [],
      daily: []
    });
  }

  const data = store.get(key);

  // Clean old entries
  data.hourly = data.hourly.filter(time => now - time < HOUR);
  data.daily = data.daily.filter(time => now - time < DAY);

  // Check limits
  if (data.hourly.length >= maxPerHour) {
    return {
      allowed: false,
      reason: 'hourly_limit_exceeded',
      retryAfter: Math.ceil((data.hourly[0] + HOUR - now) / 1000)
    };
  }

  if (data.daily.length >= maxPerDay) {
    return {
      allowed: false,
      reason: 'daily_limit_exceeded',
      retryAfter: Math.ceil((data.daily[0] + DAY - now) / 1000)
    };
  }

  // Record this request
  data.hourly.push(now);
  data.daily.push(now);

  return {
    allowed: true,
    remaining: {
      hourly: maxPerHour - data.hourly.length,
      daily: maxPerDay - data.daily.length
    }
  };
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, data] of store.entries()) {
    data.hourly = data.hourly.filter(time => now - time < HOUR);
    data.daily = data.daily.filter(time => now - time < DAY);

    if (data.hourly.length === 0 && data.daily.length === 0) {
      store.delete(key);
    }
  }
}, 5 * 60 * 1000); // Clean every 5 minutes
