

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

/* const manager = new Manager(id, name, title, officeNumber);

console.log("---Manager---");
manager. ();
manager.getRole();
 */
