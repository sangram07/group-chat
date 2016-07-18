var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});


io.on('connection', function(socket){
	io.emit('chat message',  'New buddy has joined');
  socket.on('chat message', function(msg){
    io.emit('chat message',  msg);
  });
});
io.emit('some event', { for: 'everyone' });
http.listen(4500, function(){
  console.log('listening on *:300');
});

