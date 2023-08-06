const inquirer = require('inquirer');

const fs = require('fs')

const { Circle, Triangle, Square } = require('./lib/shapes')

const { SVG } = require('./lib/svg')

function ColorChoice(colorName) {
    switch (colorName) {
      case 'blue':
        return '#0000FF';
      case 'pink':
        return '#FFC0CB';
      case 'yellow':
        return '#FFFF00';
      case 'green':
        return '#008000';
      case 'red':
        return '#FF0000';
      case 'black':
        return '#000000';
    }
  }
 
const questions = [{

    type: 'input',

    name: 'characters',

    message: 'What are the characters?',

    validate: (characters) => // validate takes a function and use the paramters you set for them

        characters.length <= 3 || 'cannot have more than 3 characters'

    // not equals is != 

}, {
    type: 'list',
    name: 'color',
    message: 'What is the Color?',
    choices: [ 'black', 'green', 'pink']

}, {
    type: 'list',
    name: 'shape',
    message: 'What is the shape?',
    choices: ['circle', 'triangle', 'square']

    // arrays are started and inbetween [] for useage

}, {

    type: 'list',
    name: 'shapeColor',
    message: 'What is the shapes color?',
    choices: ['red', 'blue', 'yellow']

},]

function startShapeQuestions() {

    return inquirer.prompt(questions).then(responses => {

        console.log(responses);

        let shape; // a variable that holding its place for later use when value is input

        if (responses.shape === 'triangle') {

            shape = new Triangle()

            // shape = new triangle()
            shape.setColor(ColorChoice(responses.shapeColor))
           
        }

        if (responses.shape === 'circle') {


           shape = new Circle()

            // shape = new circle()
            shape.setColor(ColorChoice(responses.shapeColor))
            
            // shape = new circle()
        }

        if (responses.shape === 'square') {

           shape = new Square()

            // shape = new triangle()
            shape.setColor(ColorChoice(responses.shapeColor))
           

            // shape = new square()
        }
        const svg = new SVG()

svg.setText(responses.characters, responses.color)
   
svg.setShape(shape)

        const svgContent = svg.render()

        fs.writeFile('shape.svg', svgContent, (err) => {
          if (err) throw err;
          console.log('SVG file created successfully!');
        });

// will make a new LSF


    })
}

startShapeQuestions()

// to call function is the name then the ()