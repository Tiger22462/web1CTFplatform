const express = require('express');
const app = express();
const path = require('path');

const port = 80;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/answer', (req, res) => {
  res.sendFile(path.join(__dirname, 'movie.html'));
});

app.get('/cinema', (req, res) => {
  res.sendFile(path.join(__dirname, 'rickroll.html'));
});

app.get('/board', (req, res) => {
  res.sendFile(path.join(__dirname, 'picture.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'rainbow.html'));
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
