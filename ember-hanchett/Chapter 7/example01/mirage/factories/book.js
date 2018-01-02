import { Factory, faker } from "ember-cli-mirage";

export default Factory.extend({
    // Name of the book
    title: faker.lorem.sentence,
    // Book author
    author() {
        return faker.name.findName();
    },
    // Publication year
    year: faker.date.past
});
