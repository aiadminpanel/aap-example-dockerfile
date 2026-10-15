import { createServer } from 'node:http'

const port = Number(process.env.PORT) || 8080

createServer((req, res) => {
  if (req.url === '/healthz') {
    res.writeHead(200, { 'content-type': 'application/json' })
    return res.end('{"ok":true}')
  }
  res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' })
  res.end(`<!doctype html><title>aap-example:dockerfile</title><h1>Dockerfile</h1><p>Built from this repository's own Dockerfile. Served at ${new Date().toISOString()}. Marker: <code>aap-example:dockerfile</code></p>`)
}).listen(port, '0.0.0.0', () => console.log(`listening on ${port}`))
