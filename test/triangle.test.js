const Triangle = require('../lib/triangle');

describe('Triangle.js', () => {

    describe('When all of the data is entered', () => {
        it('All of the properties should match the inquirer results', () => {
            const textColor = '#0000FF'; //blue
            const shapeColor = '#D2691E'; //chocolate
            const acronym = 'ABC';
            const triangle = 'triangle'
            const testShape = new Triangle(acronym, textColor, triangle,shapeColor);
            expect(testShape.generateSVG()).toEqual(`<svg width="300" height="200px">
<polygon points="100,0 0,200 200,200" fill="#d2691e"/>
<text x="100" y="125" fill="#0000ff" font-size="3rem" dominant-baseline="middle" text-anchor="middle">ABC</text>
</svg>`);
                });
            });
        });