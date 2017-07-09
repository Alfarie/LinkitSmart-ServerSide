var express = require('express');
var app = express();
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser')
var path = require('path');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
var root = path.join(path.resolve(__dirname, '../dist'));
app.use(express.static(root));
app.use(cors())
app.use(morgan('dev'));

var api = require('./modules/api')
var apiAdmin = require('./modules/admin-api')
app.use('/api', api)
app.use('/admin', apiAdmin)
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Socket = require('./modules/socket')(io);

listen = function(port) {
    http.listen(port, function() {
        console.log('listening *:' + port);
    });
}

listen(3001)