//const Shape = require("/Users/mark/bootcamp/svglogomaker/lib/shapes.js");
const {Shape, Circle,Triangle, Square, LogoText} = require("/Users/mark/bootcamp/svglogomaker/lib/shapes.js");


// A testing suite for Shape.
describe('Shapes Test', () => {
    // Test Shape class
    describe('Test Shape', () => {
      it('should generate svg for Shape', () => {
        const shape = new Shape("200","300");
        console.log(shape.render())
      });
    });

    describe('Test Circle', () => {
      it('should generate svg for circle', () => {
        const circle = new Circle("50","50","40");
        console.log(circle.render())       
      });
    });
 
    describe('Test Triangle', () => {
      it('should generate svg for triangle', () => {
        const triangle = new Triangle("50","50","40");
        console.log(triangle.render())       
      });
    });
    describe('Test Square', () => {
      it('should generate svg for square', () => {
        const square = new Square("50","50");
        console.log(square.render())       
      });
    });
    describe('Test LogoText', () => {
      it('should generate svg for logo text', () => {
        const logoText = new LogoText("ABC");
        console.log(logoText.render())       
      });
    });
  });

