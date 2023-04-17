// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {Shape, Circle, Triangle, Square, LogoText} = require("/Users/mark/bootcamp/svglogomaker/lib/shapes.js");
// define output folder
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
 function createLogo(response){
  
  const shapeWidth=300;
  const shapeHeight=200;
  const logoWidth=150;
  const logoHeight=150;
  const logox =50;
  const logoy=50;
  const logoSpace = 10;
  const logoColor="red";
  const logoTextColor="yellow";
  const shape = new Shape(shapeWidth,shapeHeight,"red");
  const logoText = new LogoText(logox+(logoWidth/2),logoy+(shapeHeight/2),"ABC",logoTextColor)
  var svg=""
  switch ("circle"){
    case "circle":
      svg = new Circle((logoWidth/2)+logox,(logoHeight/2)+logoy,logoHeight/2,logoColor);
      break;
    case "triangle":
      svg = Triangle(logox,logoy,logoWidth,logoHeight,logoColor);
      break;
    case "square":
      svg = new Square(logox,logoy,logoWidth,logoHeight,logoColor);
      break;
  };
      const logo =
      `${shape.render("begin")}
       ${svg.render()}
       ${logoText.render()}
       ${shape.render("end")}
      `
 
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

 
