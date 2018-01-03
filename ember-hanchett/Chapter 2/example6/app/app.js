import Application from "@ember/application";
import Resolver from "./resolver";
import loadInitializers from "ember-load-initializers";
import config from "./config/environment";

// Our imports
import EmberObject from "@ember/object";

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);


// Our code
const students = ["Erik", "Jim", "Shelly", "Kate"];


// Test forEach enumerable method
console.log("--- forEach ---");

students.forEach((student, index) => {
    console.log(`Student #${index + 1}: ${student}`);
});


// Test map
console.log("--- map ---");

const students_uppercase = students.map(student => student.toUpperCase());
students_uppercase.forEach((student, index) => {
    console.log(`Student #${index + 1}: ${student}`);
});


// Test mapBy
console.log("--- mapBy ---");

// Create teacher and student objects
const Teacher = EmberObject.extend({
    name: null
});

const Student = EmberObject.extend({
    name: null,
    grade: null
});

// Create instances
const teacher = Teacher.create({
    name: "John P. Smith"
});
const student = Student.create({
    name: "Erik Hanchett"
});

const people = [teacher, student];
console.log(people.mapBy("name"));


// Test firstObject and lastObject
console.log("--- firstObject & lastObject ---");

students.pushObject("Jenny");
students.pushObject("Susan");

console.log(students.get("firstObject"));
console.log(students.get("lastObject"));


// Test filter
console.log("--- filter ---");

const numbers = [1, 2, 5, 10, 25, 23];

const numbers_filter = numbers.filter(number => number > 10);
console.log(numbers_filter);


// Test filterBy
console.log("--- filterBy ---");

const listOfStudents = [
    Student.create({name: "Jen Smith", grade: "senior"}),
    Student.create({name: "Ben Shine", grade: "sophomore"}),
    Student.create({name: "Ann Cyrus", grade: "senior"})
];

const listOfStudents_filterBy = listOfStudents.filterBy("grade", "senior");
listOfStudents_filterBy.forEach((student, index) => {
    console.log(`Student #${index + 1}: ${student.get("name")}`);
});


// Test find
console.log("--- find ---");

const numbers_find = numbers.find(number => number > 10);
console.log(numbers_find);


// Test findBy
console.log("--- findBy ---");

const listOfStudents_findBy = listOfStudents.findBy("grade", "senior");
console.log(`Student: ${listOfStudents_findBy.get("name")}`);


// Test every
console.log("--- every ---");

const isEveryNumberGreaterThan10 = numbers.every(number => number > 10);
console.log(isEveryNumberGreaterThan10);


// Test any
console.log("--- any ---");

const isAnyNumberGreaterThan10 = numbers.any(number => number > 10);
console.log(isAnyNumberGreaterThan10);


export default App;
