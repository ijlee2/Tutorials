/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({

   title: faker.lorem.sentence,       // using faker
   author() {return faker.name.findName(); },
   year: faker.date.past
});
