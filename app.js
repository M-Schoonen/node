const http = require('http');
const prettyLog = require('pretty-log');

const log = prettyLog.default || prettyLog;

const server = http.createServer((req, res) => {

    if (typeof log === "function") {
        log({
            level: "info",
            message: `Request: ${req.method} ${req.url}`,
            timestamp: new Date().toISOString()
        });
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hoi, mijn naam is Melvin Schoonen.');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {

    if (typeof log === "function") {
        log({
            level: "info",
            message: `Server gestart op port ${PORT}`,
            timestamp: new Date().toISOString()
        });
    }

    console.log(`Server draait op port ${PORT}`);
});