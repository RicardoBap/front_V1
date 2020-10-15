const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/algamoney'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/algamoney/index.html');
});

app.listen(4200);
