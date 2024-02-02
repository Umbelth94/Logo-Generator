class Shapes {
    constructor(acronym, textColor, shapeColor){
        if (acronym.length > 3){
            return new Error('logo text can only be 3 characters or less');
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