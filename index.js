const fs = require('fs');
const inquirer = require('inquirer');
const Triangle = require('./lib/triangle')
const Circle = require('./lib/circle')
const Square = require('./lib/square')
//Just a test to make sure the file exists
// const newShape = new Shape('circle').render();


function init() {

    function writeToFile(fileName, data){
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                return console.log(err);
            } else {
                console.log('Successfully wrote to file');
            }
        })
    }

    const promptQuestions = [
    {
        type:'input',
        name:'acronym',
        message:'Enter up to 3 characters for your logo text',
    },
    {
        type:'input',
        name:'textColor',
        message:'Enter a color OR a hexidecimal number for your text color'
    },
    {
        type:'list',
        name:'shape',
        message:'Choose a shape',
        choices:['circle','triangle','square']
    },
    {
        type:'input',
        name:'shapeColor',
        message:'Enter a color OR a hexidecimal number for your shape color'
    }]
 

inquirer
    .prompt(promptQuestions)
    .then((answers) => {
        if (answers instanceof Error) {
            console.error(answers.message);
            return;
        }

        let shape;

        console.log(answers);
        if (answers.shape === 'triangle') {
            shape = new Triangle(answers.acronym, answers.textColor, answers.shape, answers.shapeColor)
        } else if (answers.shape === 'circle') {
            shape = new Circle(answers.acronym, answers.textColor, answers.shape, answers.shapeColor)
        } else if (answers.shape ==='square') {
            shape = new Square(answers.acronym, answers.textColor, answers.shape, answers.shapeColor)
        }
        const svgData = shape.render();
        writeToFile(`logo.svg`, svgData);
    })
}

init();