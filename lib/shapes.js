// Shape constructor
class Shape {
    constructor(width,height,color){
    this.height=height;
    this.width=width;
    this.color=color;
    };
    render(type){
        if(type=="begin")
        {
            return(`<?xml version="1.0" standalone="no"?>
            <svg width="${this.width}" height="${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`)  
        }
        else if(type=="end")
        {
            return("</svg>")
        };
    
};
}

class Circle extends Shape {
    constructor(width,height,radius,color){
        super(width,height,color);
        this.radius = radius;
    };
    render() {
    return(`<circle cx="${this.width}" cy="${this.height}" r="${this.radius}" fill="${this.color}" />`);    
};
};
class Triangle extends Shape {
    constructor(width,height,color){
        super(width,height,color);
    };
    render() {
        return(`<polygon points="0 ${(this.width/2)-this.height},${this.width/2} 10, ${this.width/2+this.height} ${this.height}" fill="${this.color}" >`);    
    };
};
class Square extends Shape {
    constructor(x,y,width,height,color){
        super(width,height,color);
        this.x=x;
        this.y=y;
        
    };
    render() {
    return(`<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color}"/>`);    
};
};
class LogoText extends Shape{
    constructor(width,height,text,color){
        super(width,height,color);
        this.text=text;
    };
    render() {
        return(`<text font-size="60" x="${this.width}" y="${this.height }" text-anchor="middle" fill="${this.color}">${this.text}</text>`);
    };
};

module.exports = {Shape,Circle,Triangle, Square, LogoText};


