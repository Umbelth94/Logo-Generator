const colorNames = require('./colorNames');
class Shapes {
    constructor(acronym, textColor, shapeColor){
        const hexCodeRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
        if (acronym.length > 3){
            throw new Error('logo text can only be 3 characters or less');
        }

        if (!(hexCodeRegex.test(textColor) || colorNames[textColor])){
            throw new Error('text color must be a valid hexidecimal number or a valid color name');
        }

        if (!(hexCodeRegex.test(shapeColor) || colorNames[shapeColor])){
            throw new Error('text color must be a valid hexidecimal number or a valid color name');
        }

        this.acronym = acronym;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render(){
        // Generate the SVG data from each specific shape and then return it
       const svgData = this.generateSVG(); //generateSVG will be overwritten by each specific shape class, even though it doesn't do anything here.
       return svgData;
    }
}

module.exports = Shapes;