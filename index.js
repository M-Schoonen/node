const express = require('express');
const app = express();
const prettyLog = require('pretty-log');
const log = prettyLog.default || prettyLog;

// Zet EJS als template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Route voor home
app.get('/', (req, res) => {

    if (typeof log === "function") {
        console.log(
            log({
                level: "info",
                message: `GET /`,
                timestamp: new Date().toISOString()
            })
        );
    }

    res.render('home', {
        title: "Welkom bij mijn site",
        message: "Mijn naam is Melvin Schoonen en dit is mijn Express.js server met EJS templates."
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    if (typeof log === "function") {
        console.log(
            log({
                level: "success",
                message: `Express server draait op port ${PORT}`,
                timestamp: new Date().toISOString()
            })
        );
    } else {
        console.log(`Server draait op port ${PORT}`);
    }
});