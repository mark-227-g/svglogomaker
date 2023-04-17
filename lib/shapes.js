/***************************************
 Shape class
***************************************/
class Shape {
    constructor(width,height,color){
        this.height=height;
        this.width=width;
        this.color=color.toLowerCase();
    };
    /**************************************
    Redering a shape has two parts. Type
    begin is for the SVG Heading. Type
    end is for the SVG Ending.
    **************************************/
    render(type){
        if(type=="begin")
        {
            return(`<?xml version="1.0" standalone="no"?><svg width="${this.width}" height="${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`)  
        }
        else if(type=="end")
        {
            return("</svg>")
        };
    };
}

/**************************************
 Circle Class - extends Shape class
 width and height are the x,y coordinates
 for the center of the circle
**************************************/
class Circle extends Shape {
    constructor(width,height,radius,color){
        super(width,height,color);
        this.radius = radius;
    };
    render() {
    return(`<circle cx="${this.width}" cy="${this.height}" r="${this.radius}" fill="${this.color.toLowerCase()}" />`);    
    };
};

/**************************************
 Triangle Class - extends Shape class
 width is the length of the triangle 
 base, height is the triangle height
 x, y are the bottom right coordinates
 for the base to begin
**************************************/
class Triangle extends Shape {
    constructor(x,y,width,height,color){
        super(width,height,color);
        this.x=x;
        this.y=y;
    };
    render() {
        /**************************************
         xHeight is the x coordinate for where
         the height begins on the base.
        **************************************/
        const xHeight = this.width/2;
        return(`<polygon points="0 ${ this.height},${xHeight} 0, ${this.width} ${this.height}" fill="${this.color.toLowerCase().toLowerCase()}" >`);    
    };
};

/**************************************
 Square Class - extends Shape class
 x,y are the top left coordinates
 for the square to start
**************************************/
class Square extends Shape {
    constructor(x,y,width,height,color){
        super(width,height,color);
        this.x=x;
        this.y=y;  
    };
    render() {
    return(`<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.color.toLowerCase()}"/>`);    
    };
};

/**************************************
 Square Class - extends Shape class
 width and height are the x,y coordinates
 for the begining of the text
**************************************/
class LogoText extends Shape{
    constructor(width,height,text,color){
        super(width,height,color);
        this.text=text;
    };
    render() {
        return(`<text font-size="60" x="${this.width}" y="${this.height }" text-anchor="middle" fill="${this.color.toLowerCase()}">${this.text}</text>`);
    };
};

/**************************************
Export the shapre classes
**************************************/
module.exports = {Shape,Circle,Triangle, Square, LogoText};


