
const Employee = require("./employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email, school);
        this.school = school;
    }

    getSchool() {
        console.log(this.school);
        return `${this.school}`;
    }

    getRole() {
        console.log("Intern");
        return "Intern";
    }

}
/* const intern = new Intern(id, name, title, githubUsername);

console.log("---intern---");
manager.getSchool();
manager.getRole();
 */

module.exports = Intern;
