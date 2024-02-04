const colorNames = require('./colorNames');
class Shapes {
    constructor(acronym, textColor, shapeColor){
        textColor = textColor.toLowerCase();
        shapeColor = shapeColor.toLowerCase();
        console.log('lowercase ' + textColor)
        
        //The following conditionals are a redundancy in case the inquirer validations fail.
        const hexCodeRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/; //Makes sure that the color is a valid hex code
        if (acronym.length > 3){
            throw new Error('logo text can only be 3 characters or less');
        }
        
        if (!(hexCodeRegex.test(textColor) || colorNames[textColor.toLowerCase()])){
            throw new Error('text color must be a valid hexadecimal number or a valid color name');
        }
        
        if (!(hexCodeRegex.test(shapeColor) || colorNames[shapeColor.toLowerCase()])){
            throw new Error('shape color must be a valid hexadecimal number or a valid color name');
        }

        this.acronym = acronym.toUpperCase();
        
        // Convert the colors to a hex code string regardless of input type
        if (hexCodeRegex.test(textColor)) { 
            this.textColor = textColor;
         } else {
            this.textColor = colorNames[textColor];
         } //return the hex color
         if (hexCodeRegex.test(shapeColor)) { 
            this.shapeColor = shapeColor;
         } else {
            this.shapeColor = colorNames[shapeColor];
         } //return the hex color
    }

    render(){
        // Generate the SVG data from each specific shape and then return it
       const svgData = this.generateSVG(); //generateSVG will be overwritten by each specific shape class, even though it doesn't do anything here.
       return svgData;
    }
}

module.exports = Shapes;