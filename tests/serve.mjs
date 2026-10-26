// Servidor estático mínimo para probar la compilación (dist/client) como la sirve Vercel.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = join(process.cwd(), 'dist', 'client');
const port = Number(process.env.PORT ?? 4331);
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.webp': 'image/webp', '.avif': 'image/avif', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
  '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8', '.json': 'application/json',
};

async function resolve(pathname) {
  const clean = normalize(decodeURIComponent(pathname));
  for (const candidate of [clean, join(clean, 'index.html'), `${clean}.html`]) {
    const file = join(root, candidate);
    if (!file.startsWith(root)) return null;
    try {
      if ((await stat(file)).isFile()) return file;
    } catch {}
  }
  return null;
}

createServer(async (req, res) => {
  const { pathname } = new URL(req.url ?? '/', 'http://localhost');
  // En Vercel este script lo sirve Web Analytics; en local se contesta vacío.
  if (pathname.startsWith('/_vercel/insights/')) {
    res.writeHead(200, { 'Content-Type': types['.js'] });
    res.end('');
    return;
  }
  const file = await resolve(pathname);
  if (!file) {
    res.writeHead(404, { 'Content-Type': types['.html'] });
    res.end(await readFile(join(root, '404.html')));
    return;
  }
  res.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' });
  res.end(await readFile(file));
}).listen(port, () => console.log(`Sirviendo dist/client en http://localhost:${port}`));
