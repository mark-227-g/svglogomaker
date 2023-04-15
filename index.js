// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {Shape, Circle, LogoText} = require("/Users/mark/bootcamp/svglogomaker/lib/shapes.js");

const outputFolder = "./examples/"

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
 function createLogo(){
  
  const shape = new Shape(200,300);
  const circle = new Circle(50,50,40);
  const triangle = new Triangle(50,50,40);
  const square = new square(100,100);
  const logoText = new LogoText();

 const logo =
 `${shape.render()}
  ${circle.render()}
  ${triangle.render()}
  ${square.render()}
  ${logoText.render()}
 `

  /*
  switch (response.shape){
    case "circle":
      svn = shape.circle();
      break;
    case "triangle":
      svn = shape.triangle();
      break;
    case "square":
        svn = shape.square();
      break;
 */
  
  fs.writeFile(outputFolder+"logo.svg",logo,
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
createLogo();
  /*
inquirer
.prompt(questions)
.then(response => {
  console.log(response);
  createLogo(response);
  })
*/
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

 