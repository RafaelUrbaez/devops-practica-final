const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('¡Hola Mundo desde CI/CD!');
});

module.exports = app;