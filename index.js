// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const outputFolder = "./examples/"

// Constructor Shapes is importer
const Shapes = require("./lib/shapes.js")

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
 function createLogo(response){

  const shape = new Shapes();
  const svn = shape.circle(response.logoShape);
  console.log(svn);



    fs.writeFile(outputFolder+"logo.svg",svn,
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


