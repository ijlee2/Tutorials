import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

//forEach
var students = ['Erik', 'Jim', 'Shelly', 'Kate'];
students.forEach(function(item, index) {
  console.log(`Student #${index+1}: ${item}`);
});

//map
var students = ['Erik', 'Jim', 'Shelly', 'Kate'];
var upperCaseStudent= students.map(function(item) {
	return item.toUpperCase();
});

upperCaseStudent.forEach(function(item, index) {
  console.log(`student #${index+1}: ${item}`);
});


//mapBy
var student = Ember.Object.extend({
  name: 'Erik Hanchett'
});

var teacher = Ember.Object.extend({
  name: 'John P. Smith'
  
});

const t= teacher.create();
const s = student.create();
const people = [s, t];

console.log(people.mapBy('name')); //[“Erik Hanchett”, “John P. Smith”]

//First and last objects

var students = ['Erik', 'Jim', 'Shelly', 'Kate', 'Jenny', 'Susan'];
console.log(students.get('lastObject')); //Susan
students.pushObject('Jeff');
console.log(students.get('lastObject')); //Jeff

//filter
var array = [1,2,5,10,25,23];
var newArray1 =array.filter(function(item, index, self) {
  return item > 10;
})
console.log(newArray); //[25,23]

//filterBy

var student = Ember.Object.extend({
  grade: null,
  name: null
});

var listOfStudents = [
	student.create({grade: "senior", name: "Jen Smith"}),
  student.create({grade: "sophmore", name: "Ben Shine"}),
  student.create({grade: "senior", name: "Ann Cyrus"})
];

var newStudent = listOfStudents.filterBy("grade","senior");
newStudent.forEach(function(item,index){
  console.log(item.get("name"));
}); //Jen Smith and Ann Cyrus


//find

var array = [1,2,5,10,25,23];
var newArray =array.find(function(item, index){
  return item > 10;
});
console.log(newArray); //25

//findby

var student = Ember.Object.extend({
  grade: null,
  name: null
});

var listOfStudents = [
	student.create({grade: "senior", name: "Jen Smith"}),
  student.create({grade: "sophmore", name: "Ben Shine"}),
  student.create({grade: "senior", name: "Ann Cyrus"})
];


var newStudent = listOfStudents.findBy("grade","senior");
console.log(newStudent.get("name")); //Jen Smith

//every
var array = [11,25,23,30];
console.log(array.every(function(item, index, self) {
  return item > 10;
})); //returns true


//any

var array = [1,2,5,10,25,23];
console.log(array.any(function(item, index, self) {
  return item > 10;
})); //returns true






export default App;
