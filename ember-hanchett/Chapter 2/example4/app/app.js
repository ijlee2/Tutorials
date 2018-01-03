import Application from "@ember/application";
import Resolver from "./resolver";
import loadInitializers from "ember-load-initializers";
import config from "./config/environment";

// Our imports
import Teacher from "./teacher";
import Student from "./student";
import User from "./user";

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);


// Our code
const avery = Teacher.create({
    age: "27",
    homeroom: "1075",
    gradeTeaching: "sophomore"
});

const joey = Student.create({
    age: "16",
    grade: "sophomore",
    teacher: avery
});

console.log(`Joey"s age is ${joey.get("age")}.`);
console.log(`Joey"s homeroom is ${joey.get("homeroom")}.`);
avery.set("homeroom", "2423");
console.log(`Joey"s new homeroom is ${joey.get("homeroom")}.`);


// Test one-way binding
const user = User.create({
    firstName: "Erik",
    lastName: "Hanchett"
});

console.log(`User"s nickname is ${user.get("nickname")}.`);
user.set("nickname", "Bravo");
console.log(`User"s first name is still ${user.get("firstName")}.`);
console.log(`User"s nickname is ${user.get("nickname")}.`);


export default App;
