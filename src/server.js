import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../webpack.config.js'

import React from 'react';
import ReactDom from 'react-dom/server';
import App from 'components/App';

const app = express();
const compiler = webpack(config);

app.use(express.static('dist'));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

const assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : '/';

app.get('/', function (req, res) {
  const reactHTML = ReactDom.renderToString(<App />);
  return res.end(renderReactHTML(reactHTML));
})

function renderReactHTML(reactHTML) {
  return `
    <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello</title>
      </head>
      <body>
        <div id="root">${reactHTML}</div>
      </body>
    </html>
  `;
}

app.get('/api', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ a: 1 }, null, 3));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
