const mongoose = require("mongoose");

// Import models
const Book = require("../models/book");


/****************************************************************************

    GET /book - Find all books

*****************************************************************************/
function getBooks(req, res) {
    const query = Book.find({});

    query.exec((err, books) => {
        if (err) {
            res.send(err);

        } else {
            res.json(books);

        }

    });
}


/****************************************************************************

    POST /book - Save a new book

*****************************************************************************/
function postBook(req, res) {
    const newBook = new Book(req.body);

    newBook.save((err, book) => {
        if (err) {
            res.send(err);

        } else {
            res.json({
                "message": "Book successfully added!",
                book
            });

        }

    });
}


/****************************************************************************

    GET /book/:id - Find the book that matches id

*****************************************************************************/
function getBook(req, res) {
    Book.findById(req.params.id, (err, book) => {
        if (err) {
            res.send(err);

        } else {
            res.json(book);

        }

    });
}


/****************************************************************************

    DELETE /book/:id - Delete the book that matches id

*****************************************************************************/
function deleteBook(req, res) {
    Book.remove({"_id": req.params.id}, (err, result) => {
        res.json({
            "message": "Book successfully deleted!",
            result
        });

    });
}


/****************************************************************************

    PUT /book/:id - Update the book that matches id

*****************************************************************************/
function updateBook(req, res) {
    Book.findById({"_id": req.params.id}, (err, book) => {
        if (err) {
            res.send(err);

        } else {
            Object.assign(book, req.body).save((err, book) => {
                if (err) {
                    res.send(err);

                } else {
                    res.json({
                        "message": "Book updated!",
                        book
                    });

                }

            });

        }

    });
}


/****************************************************************************

    Export all functions

*****************************************************************************/
module.exports = {getBooks, postBook, getBook, deleteBook, updateBook};