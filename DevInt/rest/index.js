'use strict';

const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();
console.log(typeof app); // should return function
// app.use(express.static('www')); // configure function object

app.use(function(req, res) {
    fs.readFile('www/index.html', 'utf8', (err, data) => {
        if (err) {
            res.end("error");
            return;
        }
        res.end(data);
    });
});

const server = http.createServer(app);

server.listen(3000, function() {
    console.log("listening on port 3000");
});

