# Deployment Checklist

## Pre-Deployment (Local)

- [x] Added `.env` file with environment variables
- [x] Created `/src/pages/api/contact.js` (backend endpoint)
- [x] Created `/src/utils/rateLimiter.js` (rate limiting)
- [x] Updated `src/components/Contact.jsx` (frontend)
- [x] Updated `astro.config.mjs` (server mode enabled)
- [x] Updated `deploy.sh` (PM2 management added)
- [x] Created `SECURITY.md` documentation
- [ ] Test locally: `npm run dev` then test contact form
- [ ] Commit changes: `git add . && git commit -m "Security: Add contact form rate limiting and backend validation"`
- [ ] Push to main branch: `git push origin main`

## Server-Side Setup (One-time)

On your server (`178.16.130.178`):

```bash
# SSH to server
ssh root@178.16.130.178

# 1. Verify Node.js and npm are installed
node --version
npm --version

# 2. Install PM2 globally (if not already installed)
npm install -g pm2

# 3. Create .env file in project directory
cd /var/www/jaimedigitalstudio.com
nano .env
```

**Add to `.env`**:
```
PUBLIC_CONTACT_EMAIL=jaimevillalcon@hotmail.com
FORMSUBMIT_EMAIL=jaimevillalcon@hotmail.com
RATE_LIMIT_REQUESTS_PER_HOUR=5
RATE_LIMIT_REQUESTS_PER_DAY=20
```

Save and exit (`Ctrl+X`, then `Y`, then `Enter`)

```bash
# 4. Verify .env is in .gitignore
cat .gitignore | grep ".env"
# Should see: .env

# 5. Verify nginx proxy configuration
# Make sure nginx proxies to localhost:3000
# Example in /etc/nginx/sites-enabled/default or your domain config
```

## Deployment

### Option 1: Run Deployment Script (Recommended)
```bash
./deploy.sh
```

This will:
- Push code to git
- SSH to server
- Pull latest changes
- Install dependencies
- Build Astro in server mode
- Start/restart Node.js with PM2
- Verify and restart nginx

### Option 2: Manual Deployment
```bash
# On your local machine
git add .
git commit -m "Deploy: security updates"
git push origin main

# On the server
ssh root@178.16.130.178
cd /var/www/jaimedigitalstudio.com
git pull
npm install
npm run build
pm2 restart jaimedigitalstudio || pm2 start dist/server/entry.mjs --name jaimedigitalstudio
pm2 save
systemctl restart nginx
```

## Post-Deployment Testing

### 1. Verify PM2 Process
```bash
ssh root@178.16.130.178
pm2 status
pm2 logs jaimedigitalstudio --lines 50
```

Expected: Process should be online/running

### 2. Test API Endpoint
```bash
curl -X GET https://www.jaimedigitalstudio.com/api/contact
# Should return: {"error":"Method not allowed"}
```

### 3. Test Contact Form
- Visit https://www.jaimedigitalstudio.com
- Scroll to contact section
- Fill form and submit
- Should see success message
- Email should arrive in your inbox

### 4. Test Rate Limiting
- Submit 5 forms rapidly (within 1 minute)
- 6th submission should show: "Too many requests. Please try again later."

### 5. Check Logs
```bash
ssh root@178.16.130.178
pm2 logs jaimedigitalstudio
# Should show no errors
```

## Rollback Plan

If something goes wrong:

### Disable API temporarily (revert to old system)
```bash
ssh root@178.16.130.178
cd /var/www/jaimedigitalstudio.com
git revert HEAD
npm install
npm run build
pm2 restart jaimedigitalstudio
systemctl restart nginx
```

### Stop Node.js app and go static
```bash
pm2 stop jaimedigitalstudio
# Website will fail - need to revert code and rebuild
```

## Environment Variables Reference

| Variable | Default | Purpose |
|----------|---------|---------|
| `PUBLIC_CONTACT_EMAIL` | N/A | Email shown in frontend (informational) |
| `FORMSUBMIT_EMAIL` | N/A | Backend email for FormSubmit service |
| `RATE_LIMIT_REQUESTS_PER_HOUR` | 5 | Max requests per IP per hour |
| `RATE_LIMIT_REQUESTS_PER_DAY` | 20 | Max requests per IP per day |

## Monitoring

### View Logs
```bash
pm2 logs jaimedigitalstudio
```

### Monitor Resources
```bash
pm2 monit
```

### Restart Process
```bash
pm2 restart jaimedigitalstudio
```

### See All PM2 Processes
```bash
pm2 status
```

## Support

### Check if contact form is working
```bash
curl -X POST https://www.jaimedigitalstudio.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message","phone":""}'
```

### Check nginx logs
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Check PM2 logs
```bash
pm2 logs jaimedigitalstudio
```

## Success Indicators

- ✅ PM2 shows process as "online"
- ✅ Contact form submits successfully
- ✅ Email arrives in inbox with proper format
- ✅ Rate limiting blocks excessive requests
- ✅ No errors in nginx logs
- ✅ API endpoint responds with 405 to GET requests
