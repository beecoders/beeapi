import express= require('express');
// var bodyParser = require();

const app = express();

app.post('/register', (req, res) => {
  res.send(this);
});

const server = app.listen(3000, () => {
  console.log('API listening on port 3000');
});
