function pad(hex) {
    // Pad a 0
    return (hex.length === 1) ? `0${hex}` : hex;
}

exports.rgbToHex = function(red, green, blue) {
    // Convert the RGB value 0-255 to a hexadecimal string
    const redHex   = red.toString(16);
    const greenHex = green.toString(16);
    const blueHex  = blue.toString(16);

    return pad(redHex) + pad(greenHex) + pad(blueHex);
}

exports.hexToRgb = function(hex) {
    // Convert the hexadecimal string to an array of RGB values
    const red   = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue  = parseInt(hex.substring(4, 6), 16);

    return [red, green, blue];
}