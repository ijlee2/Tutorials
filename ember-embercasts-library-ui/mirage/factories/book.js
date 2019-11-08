import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

const randomInteger = (a, b) => {
    return Math.floor((b - a + 1) * Math.random()) + a;
};

export default Factory.extend({
    title() {
        return faker.company.bs();
    },

    isbn() {
        return randomInteger(10**9, 10**10 - 1).toString();
    },

    publicationDate() {
        return faker.date.past(20);
    },

    afterCreate(book, server) {
        const allAuthorIds = server.db.authors.mapBy('id');
        const index = randomInteger(0, allAuthorIds.length - 1);

        book.authorId = allAuthorIds[index];

        book.save();
    }    
});