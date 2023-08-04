class SVG {

    constructor() {

        this.text = ''
        this.shape = ''

    }

    render() {


        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;

    }
 
    setText(message, color) {

this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;

    }

setShape(shape) {
    
this.shape = shape.render()


}


}

module.exports = { SVG }
// we need to make a class, this class should have a render method, it should have a method to pick the shape
// and a method to pick the character
// the constructor for this class will create this.character '' and this.shape '' in empty strings refferring to ''

// let shape; // a variable that holding its place for later use when value is input

// if (responses.shape === 'triangle') {

//     shape = new triangle()
// }
// if (responses.shape === 'circle') {

//     shape = new circle()
// }
// if (responses.shape === 'square') {

//     shape = new square()
// }
// shape.newColor(responses.shapeColor) following this format but for shapes and caharacters to create
