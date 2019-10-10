var app = require('express')();
var http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
});

http.listen(3001, function(){
  //console.log('listening on *localhost:3001');
  console.log('listening on *10.11.150.XXX:3001');
});