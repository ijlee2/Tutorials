import DS    from "ember-data";
import Faker from "faker";

export default DS.Model.extend({
    "title"      : DS.attr("string"),
    "releaseYear": DS.attr("date"),
    
    "author" : DS.belongsTo("author"),
    "library": DS.belongsTo("library"),

    randomize(author, library) {
        this.set("title", this._bookTitle());
        this.set("releaseYear", this._bookYear());

        this.set("author", author);
        this.set("library", library);

        return this;
    },

    _bookTitle() {
        return `${Faker.commerce.productName()} Cookbook`;
    },

    _bookYear() {
        const minYear = 1900, maxYear = 2018;

        // Pick a random year in-between
        const year = Math.trunc((maxYear - minYear + 1) * Math.random()) + minYear;

        return new Date(`${year}`);
    }
});