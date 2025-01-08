const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello From the server', app: 'Natours!' });
});

app.post('/', (req, res) => {
  res.send('You can post to this enddpoint');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App Running on port ${port}`);
});
