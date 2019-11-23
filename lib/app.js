const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateHTML = require("./generateHTML");
const writeFileAsync = util.promisify(fs.writeFile);
// const pdf = require('html-pdf');

const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

//-------------------------------------------------------------------

const teamArr = [];


const quesManager = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id"
  },
  //objects has key and value
  // {
  //   type: "input",
  //   message: "What is your role?",
  //   name: "role"
  // },
  {
    type: "input",
    message: "What is your Email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber"
  }
];

const quesEngineer = [
  {
    type: "input",
    message: "What is engineer's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id"
  },
  // {
  //   type: "input",
  //   message: "What is your role?",
  //   name: "role"
  // },
  {
    type: "input",
    message: "What is your Email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github"
  }
];

const quesIntern = [
  {
    type: "input",
    message: "What is intern's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id"
  },
  {
    type: "input",
    message: "What is your role?",
    name: "role"
  },
  {
    type: "input",
    message: "What is your Email?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your school?",
    name: "school"
  }
];

//------------------prompt

function promptManager() {
    inquirer
      .prompt(quesManager)
      .then(function (input) {
        console.log("manager");
        //if manager? const manager = new Manager(input.name, input.id ....)
        // if ( username === Manager) {
        const manager = new Manager(input.name, input.id, input.email, input.officeNumber)
        teamArr.push(manager);

        createTeam();
      });
  }
  
  
  function promptEngineer() {
    inquirer
      .prompt(quesEngineer)
      .then(function (input) {

        const engineer = new Engineer(input.name, input.id, input.email, input.gitName)
        teamArr.push(engineer);

        createTeam();
      });
  }

  function promptIntern() {
    inquirer
      .prompt(quesIntern)
      .then(function (input) {

        const intern = new Intern(input.name, input.id, input.email, input.school);
        teamArr.push(intern);

        createTeam();
      });
  }

  //---------------createTeam

  function createTeam() {

    const createTeamMember = [
      {
        type: "list",
        message: "Which member do you want to add?",
        name: "role",
        choices: [
          "Engineer",
          "Intern",
          "Finish Create Team" // This ends adding team member/
        ]
      }];

    inquirer
      .prompt(createTeamMember)
      .then(function (input) {
        console.log(input);

        if (input.role === "Engineer") {
          promptEngineer();
        }
        if (input.role === "Intern") {
          promptIntern();
        }
        else (input.role === "Finish Create Team") 
          console.log(teamArr);
          // console.log(engineerArr);
          // console.log(internArr); 
          
          getHtmlTeam();

          return;
      });
  }

  promptManager();


  // ------------------------------------------------
// [manager{},engineer{},intern{}]
  function getHtmlTeam() {
    for ( let i=0 ; i < teamArr.length; i++) {
      const html = generateHTML(teamArr[i]);
      writeFileAsync("team.html", html);
 }    
    // convertPdf(html);
  };

// __dirname + `/${name}.html`

