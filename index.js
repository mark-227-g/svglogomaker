// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
var svg = require('svg-builder')
.width(300)
.height(200);
/****************************************
 Array of shape types
 ****************************************/
 const shapeTypes=[
    {id:'circle',name:'Circle'},
    {id:'triangle',name:'Triangle'},
    {id:'square',name:'Square'}
 ]

/****************************************
 Create an array of questions for user input
 ****************************************/
const questions = [
  {
    type: "input",
    name: "logoText",
    message: "Enter logo text (max three characters): "
  },
  {
    type: "input",
    name: "logoTextColor",
    message: "Enter logo text color: "
},
{
  type: "list",
    name: "logoShape",
    message: "Select logo shape: ",
    choices: shapeTypes
},
{

    type: "input",
    name: "logoShapeColor",
    message: "Select logo shape color: "
  }
];

/****************************************
 Use inquirer to ask the questions
 once successful make a call to the 
 function: createLogo
 ****************************************/
 function createLogo(rspObject){

    var logo = svg
        .circle({
            r: 40,
            fill: 'none',
            'stroke-width': 1,
            stroke: '#CB3728',
            cx: 42,
            cy: 82
        }).circle({
            r: 40,
            fill: 'none',
            'stroke-width': 1,
            stroke: '#3B92BC',
            cx: 84,
            cy: 82
        }).text({
            x: 10,
            y: 20,
            'font-family': 'helvetica',
            'font-size': 15,
            stroke : '#fff',
            fill: '#fff'
        }, 'My logo').render();



    fs.writeFile("logo.svg","logo",
    (err) => err ? false : true
    );

    console.log("Generated logo.svg")
 }

/****************************************
 Use inquirer to ask the questions
 once successful make a call to the 
 writeReadme function
 ****************************************/
function askQuestions(){

inquirer
.prompt(questions)
.then(response => {
  console.log(response);
  createLogo(response);
  })

};

/****************************************
 function to initialize app init will first
 ask the questions. if the function is 
 successful then write the readme file
 ****************************************/
function init() {
  askQuestions();
  //console.log(rsp)
}

/****************************************
 The init function is run when the process 
 starts. It is the first thing run when
 the node application begins
 ****************************************/
init();


