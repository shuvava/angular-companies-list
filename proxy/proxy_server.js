const express = require('express');
const compression = require('compression');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const http = require('http');
const http2 = require('http2');
const https = require('https');
const fs = require('fs');

const API_URL = process.env.APIURL || '';

const app = express();

app.use(compression());

app.use(cors());

const proxyFunc = proxy({
    target: API_URL,
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
        if (proxyRes) {
            // console.log(`headers: ${JSON.stringify(proxyRes.headers)}`);
            proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        }
    },
});

// app.use('*', (req, res, next) => {
//     const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
//     console.log(`received from ${req.get("X-Forwarded-For")} : ${req.method} ${fullUrl} (Authorization: ${req.get("Authorization")})`);
//     return proxyFunc(req, res, next);
// });

app.get('/', function (req, res) {
    res.send('hello, http2!')
});

// const server = app.listen(80, () => {
//     console.log(`App running on http://localhost:80 request forward to ${API_URL}`);
// });
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

const server = http.createServer(app);
// const serverSSL = https.createServer({
//     pfx: fs.readFileSync('./ssl/cert.pfx'),
//     passphrase: '1',
// }, app);
const serverSSL = http2.createServer({
    pfx: fs.readFileSync('./ssl/cert.pfx'),
    passphrase: '1',
    // key: fs.readFileSync(__dirname + '/ssl/server.key'),
    // cert: fs.readFileSync(__dirname + '/ssl/server.crt')
//     key: fs.readFileSync('./ssl/cert.rsa'),
//     cert: fs.readFileSync('./ssl/cert.crt')
}, app);


onError = (err) => {
    if (err) {
        console.error(error)
        process.exit(1)
    }
}

server.listen(80, '0.0.0.0', (err) => {
    onError(err);
    console.log(`App running on http://localhost:80 request forward to ${API_URL}`);
});

serverSSL.listen(443, '0.0.0.0', (err) => {
    onError(err);
    console.log(`App running on https://localhost:443 request forward to ${API_URL}`);
});

process.on('SIGINT', () => {
  console.log("Stopping app...");
  server.close();
  serverSSL.close();
  process.exit();
});
