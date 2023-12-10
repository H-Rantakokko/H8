const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
  res.send('Tämä node.js sovellus julkaistu Renderin kautta');
});

app.listen(port, () => {
  console.log(`portti: ${port}`);
});
