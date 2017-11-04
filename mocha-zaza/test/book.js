// Set the env variable to test while not in production mode
process.env.NODE_ENV = "test";

const mongoose = require("mongoose");
const Book     = require("../app/models/book");

// Require the dev-dependencies
const chai     = require("chai");
const chaiHttp = require("chai-http");
const server   = require("../server");
const should   = chai.should();

chai.use(chaiHttp);

// Parent block
describe("Books", () => {
    // Empty the database before each test
    beforeEach(done => {
        Book.remove({}, err => {
            done();

        });

    });

    // Test the /GET route
    describe("/GET book", () => {
        it("should GET all the books", done => {
            chai.request(server)
                .get("/book")
                .end((err, res) => {
                    // Since the database is empty, the request should result in
                    // a status code 200 and an empty array.
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    res.body.length.should.be.eql(0);

                    done();

                });

        });

    });

    // Test the /POST route
    describe("/POST book", () => {
        it("should not POST a book without pages field", done => {
            const book = {
                "title" : "The Lord of the Rings",
                "author": "J. R. R. Tolkien",
                "year"  : 1954
            };

            chai.request(server)
                .post("/book")
                .send(book)
                .end((err, res) => {
                    /* 
                        Sample response from Postman
                        {
                            "errors": {
                                "pages": {
                                    "message": "Path `pages` is required.",
                                    "name": "ValidatorError",
                                    "properties": {
                                        "type": "required",
                                        "message": "Path `{PATH}` is required.",
                                        "path": "pages"
                                    },
                                    "kind": "required",
                                    "path": "pages",
                                    "$isValidatorError": true
                                }
                            },
                            "_message": "book validation failed",
                            "message": "book validation failed: pages: Path `pages` is required.",
                            "name": "ValidationError"
                        }
                    */
                    res.should.have.status(200);
                    res.body.should.have.a("object");
                    res.body.should.have.property("errors");
                    res.body.errors.should.have.property("pages");
                    res.body.errors.pages.should.have.property("kind").eql("required");

                    done();

                });

        });

        it("should POST a book", done => {
            const book = {
                "title" : "The Lord of the Rings",
                "author": "J. R. R. Tolkien",
                "year"  : 1954,
                "pages" : 1170
            };

            chai.request(server)
                .post("/book")
                .send(book)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.a("object");
                    res.body.should.have.property("message").eql("Book successfully added!");
                    res.body.book.should.have.property("title");
                    res.body.book.should.have.property("author");
                    res.body.book.should.have.property("year");
                    res.body.book.should.have.property("pages");

                    done();

                });

        });

    });

    // Test the /GET/:id route
    describe("/GET/:id book", () => {
        it("should GET a book given the id", done => {
            const book = new Book({
                "title" : "The Lord of the Rings",
                "author": "J. R. R. Tolkien",
                "year"  : 1954,
                "pages" : 1170
            });

            book.save((err, book) => {
                chai.request(server)
                    .get(`/book/${book.id}`)
                    .send(book)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.a("object");
                        res.body.should.have.property("title");
                        res.body.should.have.property("author");
                        res.body.should.have.property("year");
                        res.body.should.have.property("pages");
                        res.body.should.have.property("_id").eql(book.id);

                        done();

                    });

            });

        });

    });

    // Test the /PUT/:id route
    describe("/PUT/:id book", () => {
        it("should UPDATE a book given the id", done => {
            const book = new Book({
                "title" : "The Chronicles of Narnia",
                "author": "C. S. Lewis",
                "year"  : 1948,
                "pages" : 778
            });

            book.save((err, book) => {
                const yearNew = 1950;

                chai.request(server)
                    .put(`/book/${book.id}`)
                    .send({
                        "title" : "The Chronicles of Narnia",
                        "author": "C. S. Lewis",
                        "year"  : yearNew,
                        "pages" : 778
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a("object");
                        res.body.should.have.property("message").eql("Book updated!");
                        res.body.book.should.have.property("year").eql(yearNew);

                        done();

                    });

            });

        });

    });

    // Test the /DELETE/:id route
    describe("/DELETE/:id book", () => {
        it("should DELETE a book given the id", done => {
            const book = new Book({
                "title" : "The Hitchhiker's Guide to the Galaxy",
                "author": "Douglas Adams",
                "year"  : 1979,
                "pages" : 224
            });

            book.save((err, book) => {
                chai.request(server)
                    .delete(`/book/${book.id}`)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a("object");
                        res.body.should.have.property("message").eql("Book successfully deleted!");
                        res.body.result.should.have.property("ok").eql(1);
                        res.body.result.should.have.property("n").eql(1);

                        done();

                    });

            });

        });

    });

});