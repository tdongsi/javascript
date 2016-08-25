'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    fs.readFile('./www/index.html', 'utf8', function(err, data) {
        if (err) {
            res.end('could not find file');
            return;
        }

        res.end(data);
    })
});

server.listen(3000, function() {
    console.log("listening on port 3000");
})