import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.post('/register', (req, res) => {
  res.send('Did you just try to register?');
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
