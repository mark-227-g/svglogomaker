// Shape constructor
class Shape {
    constructor(height,width){
    this.height=height;
    this.width=width
    };
    render(){
      return(`<?xml version="1.0" standalone="no"?>
      <svg width="${this.width}" height="${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`)
    };
    
};

class Circle extends Shape {
    constructor(height,width,radius){
        super(height,width);
        this.radius = radius;
    };
    render() {
    return(`<circle cx="${this.width}" cy="${this.height}" r="${this.radius}" fill="green"/>`);    
};
};

class LogoText extends Shape {
    constructor(height,width,radius){
        super(height,width);
        this.radius = radius;
    };
    render() {
        return(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SVG</text>`);
    };
};

module.exports = {Shape,Circle,LogoText};


