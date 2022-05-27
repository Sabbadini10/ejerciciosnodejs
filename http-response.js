const http = require('http');
const process = require('process');

const url = process[2];

http.get(url, function(response) {
    response.setEncoding('utf-8');
    response.on('data', console.log);
    response.on('error', console.log);
}).on('error', console.log)