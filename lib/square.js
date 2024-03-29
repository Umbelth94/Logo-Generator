const Shapes = require('./shapes');

class Square extends Shapes{
    constructor(acronym, textColor, shape, shapeColor){
        super(acronym, textColor, shapeColor);
        this.shape = shape;
    }
    generateSVG(){
        console.log(`${this.shapeColor} ${this.shape} with text ${this.acronym} and color ${this.textColor}`);
        return `<svg width="300" height="200">
<rect x="0" y="0" width="200px" height= "200px" fill="${this.shapeColor}">
</rect>
<text x="100" y="100" fill="${this.textColor}" font-size="3rem" dominant-baseline="middle" text-anchor="middle">${this.acronym}</text>
</svg>`
    }
}

module.exports = Square;