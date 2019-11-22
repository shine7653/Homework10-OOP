
const Employee = require("./employee");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOffice() {
    console.log(this.officeNumber);
    return `${this.officeNumber}`;
  }

  getRole() {
    console.log("Manager");
    return "Manager";
  }

}
/* const manager = new Manager(id, name, title, officeNumber);

console.log("---Manager---");
manager. ();
manager.getRole();
 */
module.exports = Manager;
