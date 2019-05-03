const express = require('express');
const compression = require('compression');
const path = require('path');
const proxy = require('http-proxy-middleware')
const cors = require('cors')

const PORT = process.env.PORT || 4000;
const API_URL = process.env.APIURL || '';

const app = express();

app.use(compression());
app.use(cors());

// serve static assets normally
app.use(express.static(__dirname + '/dist'));

if (API_URL !== '') {
  console.log(`setup proxy of api request to ${API_URL}`);
  app.use('/api', proxy({ target: API_URL, changeOrigin: true }))
}

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname + '/dist', 'index.html'));
});

const server = app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));

process.on('SIGINT', () => {
  console.log("Stopping app...");
  server.close();
  process.exit();
});
