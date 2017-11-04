const { expect } = require("chai");

const converter = require("../app/converter");

// Mocha provides the describe function, which allows us to describe the features
// that we are implementing. The describe function encapsulates our expectations.
// The first argument is a string that describes the feature, while the second is
// a function that represents the body of the description.
describe("Color Code Converter", function() {
    describe("RGB to HEX conversion", function() {
        it("converts the basic colors", function() {
            // Test cases
            const redHex   = converter.rgbToHex(255, 0, 0);
            const greenHex = converter.rgbToHex(0, 255, 0);
            const blueHex  = converter.rgbToHex(0, 0, 255);

            // Set expectations
            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");
        });
    });

    describe("HEX to RGB conversion", function() {
        it("converts the basic colors", function() {
            // Test cases
            const red   = converter.hexToRgb("ff0000");
            const green = converter.hexToRgb("00ff00");
            const blue  = converter.hexToRgb("0000ff");

            // Set expectations (use deep to compare all elements in an array)
            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });
});