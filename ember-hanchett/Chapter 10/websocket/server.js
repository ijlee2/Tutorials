// Server example
const WebSocket = require("ws");
const wss = new WebSocket.Server({"port": 7000});

wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
        console.log("Received: %s", message);
    });

    ws.send("Hey! Welcome to my Websocket challenge!");
});