var express = require('express');
var app = express();
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));
app.get('/', function (res, res) {
  res.sendFile(__dirname + '/index.html', function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get('/test', function (res, res) {
  res.sendFile(__dirname + '/404.html', function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, function () {
   console.log('listening on port', port);
});

