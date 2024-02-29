import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App.tsx';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const app = express();
const port = 9000;

app.get('/', (req, res) => {
  const appHtml = renderToString(<App />); //指定内容

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR React App</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      </head>
      <body>
        <div id="root">${appHtml}</div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
