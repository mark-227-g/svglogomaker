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
    return(`<circle cx="${this.width}" cy="${this.height}" r="${this.radius}" />`);    
};
};
class Triangle extends Shape {
    constructor(height,width,radius){
        super(height,width);
        this.radius = radius;
    };
    render() {
    return(`<polygon points="200,10 250,190 160,200 />`);    
};
};
class Square extends Shape {
    constructor(height,width){
        super(height,width);
    };
    render() {
    return(`<rect width="${this.width}" height="${this.height}"/>`);    
};
};
class LogoText {
    constructor(text){
        
        this.text=text;
    };
    render() {
        return(`<text font-size="60" text-anchor="middle" fill="blue">${this.text}</text>`);
    };
};

module.exports = {Shape,Circle,Triangle, Square, LogoText};


