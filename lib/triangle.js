const Shape = require('./shapes');

class Triangle extends Shape{
    constructor(acronym, textColor, shape, shapeColor){
        super(acronym, textColor, shapeColor);
        this.shape = shape;
    }
    generateSVG(){ //Overwrites the generateSVG method from the Shape class.  This is technically encapsulated by the Shape Class's render method.
        //Implement the logic to generate raw SVG data for the logo
        //use this.acronym, this.textColor, this.shapeColor
        //return the raw SVG data as a string
        // return `<polygon>...</polygon>`;
        console.log(`${this.shapeColor} ${this.shape} with text ${this.acronym} and color ${this.textColor}`);
    }
}

module.exports = Triangle;