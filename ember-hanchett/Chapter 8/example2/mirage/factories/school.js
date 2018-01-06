import { Factory, faker } from "ember-cli-mirage";

export default Factory.extend({
    name: faker.name.firstName,
    city: faker.address.city
});
