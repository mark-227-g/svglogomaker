// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {Shape, Circle, Triangle, Square, LogoText} = require("/Users/mark/bootcamp/svglogomaker/lib/shapes.js");
const { kMaxLength } = require("buffer");
// define output folder
const outputFolder = "./examples/"

/****************************************
 Array of shape types
 ****************************************/
 const shapeTypes=[
    {id:'circle',name:'circle'},
    {id:'triangle',name:'triangle'},
    {id:'square',name:'square'}
 ]

/****************************************
 Create an array of questions for user input
 ****************************************/
const questions = [
  {
    type: "maxlength-input",
    name: "logoText",
    message: "Enter logo text (max three characters): ",
    MaxLength:3
  },
  {
    type: "input",
    name: "logoTextColor",
    message: "Enter logo text color or hexadecimal number: "
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
    message: "Select logo shape color name or hexadecimal number: "
  }
];

/****************************************
 Use inquirer to ask the questions
 once successful make a call to the 
 function: createLogo
 ****************************************/
 function createLogo(rsp){
  
  const shapeWidth=300;
  const shapeHeight=200;
  const logoWidth=150;
  const logoHeight=150;
  const logox=75;
  var logoy=25;

  const logoShapeColor=rsp.logoShapeColor;
  const logoTextColor=rsp.logoTextColor;

  const shape = new Shape(shapeWidth,shapeHeight,"");

  var svg=""
  switch (rsp.logoShape){
    case "circle":
      svg = new Circle((shapeWidth/2),(shapeHeight/2),80,logoShapeColor);
      break;
    case "triangle":
      svg = new Triangle(logox,logoy,logoWidth,logoHeight,logoShapeColor);
      logoy+=25;
      break;
    case "square":
      svg = new Square(logox,logoy,logoWidth,logoHeight,logoShapeColor);
      break;
  };
  const logoText = new LogoText(logox+(logoWidth/2),logoy+(shapeHeight/2),rsp.logoText,logoTextColor)
 
      const logo =
`${shape.render("begin")}

  ${svg.render()}

  ${logoText.render()}

${shape.render("end")}`
 
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

 
