import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = 4321;
const STATIC_DIR = 'dist/client';

const mimeTypes = {
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.html': 'text/html',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  // Parse URL and remove query strings
  let filePath = req.url.split('?')[0];

  // Default to index.html for root
  if (filePath === '/') {
    filePath = '/index.html';
  }

  // Build full path
  const fullPath = path.join(STATIC_DIR, filePath);
  const fullPathBr = fullPath + '.br';

  // Check if client accepts Brotli
  const acceptEncoding = req.headers['accept-encoding'] || '';
  const supportsBrotli = acceptEncoding.includes('br');

  // Check for .br version first (Brotli)
  if (supportsBrotli && fs.existsSync(fullPathBr)) {
    fs.readFile(fullPathBr, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error');
        return;
      }

      const ext = path.extname(fullPath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Encoding': 'br',
        'Vary': 'Accept-Encoding',
      });
      res.end(data);
    });
    return;
  }

  // Serve regular file
  if (fs.existsSync(fullPath)) {
    fs.readFile(fullPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error');
        return;
      }

      const ext = path.extname(fullPath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
    return;
  }

  // 404
  res.writeHead(404);
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`Preview server with Brotli at http://localhost:${PORT}`);
  console.log(`Serving static files from: ${STATIC_DIR}`);
});
