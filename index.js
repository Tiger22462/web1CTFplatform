const express = require('express');
const app = express();
const path = require('path');

const port = 80;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  //check
});

app.get('/answer', (req, res) => {
  res.sendFile(path.join(__dirname, 'movie.html')); //check
});

app.get('/cinema', (req, res) => {
  res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley&autoplay=1'); //check
});

app.get('/board', (req, res) => {
  res.sendFile(path.join(__dirname, 'picture.html')); //only picture set up
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'rainbow.html')); //check
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
