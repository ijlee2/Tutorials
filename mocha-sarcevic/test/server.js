const { expect } = require("chai");
const request    = require("request");

describe("Color Code Converter API", function() {
    describe("RGB to HEX conversion", function() {
        // Path to the resource
        const url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

        it("returns status 200", function(done) {
            // Make a request
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();

            });
        });

        it("returns the color in hex", function(done) {
            // Make a request
            request(url, function(error, response, body) {
                expect(body).to.equal("ffffff");
                done();

            });
        });
    });

    describe("HEX to RGB conversion", function(done) {
        // Path to the resource
        const url = "http://localhost:3000/hexToRgb?hex=00ff00";

        it("returns status 200", function(done) {
            // Make a request
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();

            });
        });

        it("returns the color in RGB", function(done) {
            // Make a request
            request(url, function(error, response, body) {
                expect(body).to.equal("[0,255,0]");
                done();

            });
        });
    });
});