const express = require("express");
const app     = express();

const converter = require("./converter");

// Define API routes
app.get("/rgbToHex", function(req, res) {
    const red   = parseInt(req.query.red, 10);
    const green = parseInt(req.query.green, 10);
    const blue  = parseInt(req.query.blue, 10);

    const hex = converter.rgbToHex(red, green, blue);

    res.send(hex);
});

app.get("/hexToRgb", function(req, res) {
    const hex = req.query.hex;

    const rgb = converter.hexToRgb(hex);

    res.send(JSON.stringify(rgb));
});

app.listen(3000);