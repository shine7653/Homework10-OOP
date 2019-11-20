
//-----------------------------------------------------------
class Employee {
  constructor(id, name, title) {
    this.id = id;
    this.name = name;
    this.title = title;
  }

  getName() {
    console.log(this.name);
    return `{$this.name}`;
  }
  getId() {
    console.log(this.id);
    return `{$this.id}`;
  }
  getEmail() {
    console.log(this.email);
    return `{$this.email}`;
  }
  getRole() {
    console.log(this.role);
    return `{$this.role}`;
  }

  printInfo() {
    console.log(`This Employee has ${this.title}`);
  }
}
module.exports = Employee;

//-----------------------------------------------------------------
const Employee = require("./employee");

class Manager extends Employee {
  constructor(id, name, title, officeNumber) {
    super(id, name, title);
    this.officeNumber = officeNumber;
}

  getRole() {
    console.log(this.role);
    return `{$this.role}`;
}

const manager = new Manager(id, name, title, officeNumber);

console.log("---Manager---");
manager. ();
manager.getRole();

//-----------------------------------------------------------------
const Employee = require("./employee");

class Engineer extends Employee {
  constructor(id, name, title, githubUsername) {
    super(id, name, title);
    this.githubUsername = githubUsername;
}

getGithub() {
    console.log(this.gitHub);
    return `{$this.github}`;
}
getRole() {
    console.log(this.role);
    return `{$this.role}`;
}

const engineer = new Engineer(id, name, title, githubUsername);

console.log("---Engineer---");
manager.getGithub();
manager.getRole();

//-----------------------------------------------------------------
const Employee = require("./employee");

class Intern extends Employee {
  constructor(id, name, title, school) {
    super(id, name, title);
    this.school = school;
}

getSchool() {
    console.log(this.school);
    return `{$this.school}`;
}
getRole() {
    console.log(this.role);
    return `{$this.role}`;
}

const intern = new Intern(id, name, title, githubUsername);

console.log("---intern---");
manager.getSchool();
manager.getRole();

