/***************************************
 test cases for the shapes class
***************************************/
const {Shape, Circle,Triangle, Square, LogoText} = require("/Users/mark/bootcamp/svglogomaker/lib/shapes.js");

/***************************************
 Shape testing suite
***************************************/
describe('Shapes Test', () => {
    /***************************************
    Test Shape class
    ***************************************/
    describe('Test Shape', () => {
      it('should generate svg for Shape', () => {
        const shape = new Shape(200,300,"blue");
        const svg = shape.render('begin');
        expect(svg).toEqual(
'<svg version="1.1" width="200" height="300" xmlns="http://www.w3.org/2000/svg">')
      });
    });
    /***************************************
    Test Circle class
    ***************************************/
    describe('Test Circle', () => {
      it('should generate svg for circle', () => {
        const circle = new Circle(50,50,40,"blue");
        const svg = circle.render();
        expect(svg).toEqual('<circle cx="50" cy="50" r="40" fill="blue" />')        
      });
    });
 
    /***************************************
    Test Triangle class
    ***************************************/
    describe('Test Triangle', () => {
      it('should generate svg for triangle', () => {
        const triangle = new Triangle(10,10,100,50,"yellow");
        const svg = triangle.render();
        expect(svg).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="yellow" />')        
      });
    });
    /***************************************
    Test Square class
    ***************************************/
    describe('Test Square', () => {
      it('should generate svg for square', () => {
        const square = new Square(10,10,100,50,"green");
        const svg = square.render();
        expect(svg).toEqual('<rect x="10" y="10" width="100" height="50" fill="green"/>')       
      });
    });
    /***************************************
    Test LogoText class
    ***************************************/
    describe('Test LogoText', () => {
      it('should generate svg for logo text', () => {
        const logoText = new LogoText(10,10,"ABC","red");
        const svg = logoText.render();
        expect(svg).toEqual('<text x="10" y="10" font-size="60" text-anchor="middle" fill="red">ABC</text>')       
      });
    });
  });

