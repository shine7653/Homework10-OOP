
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

/* const intern = new Intern(id, name, title, githubUsername);

console.log("---intern---");
manager.getSchool();
manager.getRole();
 */
