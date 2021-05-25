const express = require('express')
const app = express()
const port = 8080;

const path = require('path');

app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/public/')});
});

app.listen(port, () => {
    console.log(`Turi app listening at http://localhost:${port}`)
  })