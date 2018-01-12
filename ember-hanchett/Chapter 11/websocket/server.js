// Server example
const WebSocket = require("ws");
const wss = new WebSocket.Server({"port": 7000});

// Broadcast to all
wss.broadcast = function broadcast(message) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    });
};

wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
        console.log(`Received message: ${message}`);

        // Broadcast to everyone else
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.open) {
                client.send(`Received: ${message}`);
            }
        });

        ws.send(message);
    });

    ws.send("Hello from the server. Thanks for connecting!");
});