import { Factory, faker } from "ember-cli-mirage";

export default Factory.extend({
    title: faker.lorem.sentence,
    author() {
        return faker.name.findName();
    },
    year: faker.date.past
});
