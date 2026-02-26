const http = require('http');
const prettyLog = require('pretty-log');

const log = prettyLog.default || prettyLog;

const server = http.createServer((req, res) => {

    const message = `Request: ${req.method} ${req.url}`;

    // Print prettige log naar terminal
    if (typeof log === "function") {
        console.log(
            log({
                level: "info",
                message: message,
                timestamp: new Date().toISOString()
            })
        );
    } else {
        // fallback
        console.log(message);
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hoi, mijn naam is Melvin Schoonen.');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    const startMessage = `Server gestart op port ${PORT}`;

    if (typeof log === "function") {
        console.log(
            log({
                level: "success",
                message: startMessage,
                timestamp: new Date().toISOString()
            })
        );
    } else {
        console.log(startMessage);
    }
});