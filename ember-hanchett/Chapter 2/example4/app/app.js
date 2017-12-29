import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import teacher from './teacher';
import student from './student';
import myName from './myName';
import User from './User';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

const avery = teacher.create({
  age: "27",
  homeroom: "1075",
  gradeTeaching: "sophmore"
});


const joey = student.create({
  age: "16",
  grade: "sophmore",
  teacher: avery
});

console.log(joey.get("age")); //16
console.log(avery.get("homeroom")); //1075
avery.set("homeroom","2423");
console.log(joey.get("homeroom")); //2423

//myName alias example
const erik = myName.create();

console.log(erik.get('name')); //Erik Hanchett
console.log(erik.get('otherName')); //Erik Hanchett

//one-way example
const user = User.create({
  firstName: 'Erik',
  lastName:  'Hanchett'
});

console.log(user.get('nickName'));              // 'Erik'
user.set('nickName', 'Bravo'); // 'Bravo'
console.log(user.get('firstName'));             // 'Erik'



export default App;
