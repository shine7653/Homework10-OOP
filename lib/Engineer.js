
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
}

// const engineer = new Engineer(id, name, title, githubUsername);

// console.log("---Engineer---");
// manager.getGithub();
// manager.getRole();

