const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// const pdf = require('html-pdf');

const Employee = require("./employee");

const ques = [
    {
      type: "input",
      message: "An engineering team: a manager, engineer, interns?",
      name: "username"
    },    
  ];

function promptUser() {
  
    inquirer
      .prompt(ques)
      .then(function (input) {
        // console.log(answers);
        const username = input.username;
        ?????
        //if manager? const manager = new Manager(input.name, input.id ....)
        const queryUrl = `https://api.github.com/users/${username}`;
        return queryUrl;
      })

            });
      });
  };
  
function createAll(info) {
    const html = generateHTML(info);
    writeFileAsync("team.html", html);
    // convertPdf(html);
};

promptUser();


// -------------------------------------------------------------------------

/* 

var fs = require("fs");
var UserSearch = require("./UserSearch");
var moment = require("moment");

var WeatherAdmin = function() {
  this.getData = function() {
    fs.readFile("log.txt", "utf8", function(error, data) {
      console.log(data);
    });
  };

  this.newUserSearch = function(name, location) {
    var newUserSearch = new UserSearch(name, location);
    var logTxt =
      "\nName: " +
      newUserSearch.name +
      " Location: " +
      newUserSearch.location +
      " Date: " +
      moment(newUserSearch.date).format("MM-DD-YYYY");

    fs.appendFile("log.txt", logTxt, function(err) {
      if (err) throw err;
    });

    newUserSearch.getWeather();
  };
};

module.exports = WeatherAdmin; */
