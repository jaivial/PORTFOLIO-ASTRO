module.exports = {
  apps: [{
    name: 'jaimedigitalstudio',
    script: './start.sh',
    cwd: '/var/www/PORTFOLIO-ASTRO',
    interpreter: 'bash',
    env: {
      HOST: '127.0.0.1',
      PORT: 3001,
      NODE_ENV: 'production'
    },
    instances: 1,
    autorestart: true,
    watch: false,
    log_file: '/root/.pm2/logs/jaimedigitalstudio-out.log',
    error_file: '/root/.pm2/logs/jaimedigitalstudio-error.log',
    time: true
  }]
};
