// app.js
var http = require('http');  
var sockjs = require('sockjs');


var clients = {};

function broadcast(message){  
  for (var client in clients){
    clients[client].write(message);
  }
}

var socketServer = sockjs.createServer({ sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js' });  
socketServer.on('connection', function(conn) {  
    clients[conn.id] = conn;

    conn.on('data', function(message) {
        console.log('received ' + message);
        broadcast(message);
    });
    conn.write("hello from the server thanks for connecting!");
    conn.on('close', function() {
        delete clients[conn.id];
        });
    console.log("connected");
});

var server = http.createServer();  
socketServer.installHandlers(server);  
server.listen(7000, '0.0.0.0');
