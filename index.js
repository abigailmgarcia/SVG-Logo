const inquirer = require('inquirer');
const fs = require('fs');
const generateShapesShapes = require("./lib/shapes");

inquirer
    .prompt([
        {
            type:'input',
            name: 'text',
            message: 'Enter 3 characters for your logo:',
        },
        {
            type: 'input',
            name: 'text color',
            message:'Please enter your text color:',
        },
        {
            type: "list",
            name: "shape",
            message: "Select the shape you want for your logo:",
            choices: ["circle", "triangle", "square"],
        },
        {
            type: 'input',
            name: 'shape color',
            message: 'please enter your shape color',
        },
    ])
    .then((answers) => {
        const svgContent = generateShapes(answers);

        fs.writeFile('logo.svg', svgContent, err =>{
            if(err){
                console.log(err);
                return
            }
            console.log('logo saved as a svg');
        });
    });