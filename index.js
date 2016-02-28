var express = require('express');
var app = express();
var port = process.env.port || 3000;

var options = {
    root: __dirname + '/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

app.use(express.static(__dirname + '/'));
app.get('/', function (res, res) {
  res.sendFile(__dirname + '/index.html', function (err) {
    if (err) {
      res.status(500).send(err);
    }
  })
});

app.listen(port, function (argument) {
   console.log('listening on port', port);
});

