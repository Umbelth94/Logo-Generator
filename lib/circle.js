const Shapes = require('./shapes');

class Circle extends Shapes{
    constructor(acronym, textColor, shape, shapeColor){
        super(acronym, textColor, shapeColor);
        this.shape = shape;
    }
    generateSVG(){
        //Implement the logic to generate raw SVG data for the logo
        //use this.acronym, this.textColor, this.shapeColor
        //return the raw SVG data as a string
        // return `<circle>...</circle>`;
        console.log(`${this.shapeColor} ${this.shape} with text ${this.acronym} and color ${this.textColor}`);
    }
}

module.exports = Circle;