//const Shape = require("/Users/mark/bootcamp/svglogomaker/lib/shapes.js");
const {Shape, Circle} = require("/Users/mark/bootcamp/svglogomaker/lib/shapes.js");



//var shape=new Shape();
//console.log(shape.render());

// A testing suite for Shape is created.
describe('Shape', () => {
    // A test is created to check the svg
    describe('shape', () => {
      it('should generate svg for shape', () => {
        const shape = new Shape("200","300");
        console.log(shape.render())
        const circle = new Circle("50","50","40");
        console.log(circle.render())
        
      });
    });
  });

