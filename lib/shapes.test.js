// const { add } = require('./shapes');

// test('should add two numbers correctly', () => {
//     expect(add(2,3)).toBe(5);
// });

// // render imported
// // const { describe } = require('yargs');
// const {Circle, Square, Triangle, generateSvg} = require('./shapes');

// // Testing suite
// describe('generateSvg', () => {
//     test('renders a circle with user choice of color', ()=>{
//         const shape = new Circle("cjs", "red", "blue", "circle");
//         shape.setColor("blue");
//         expect(generateSvg(shape)).toEqual('<<svg viewBox="0 0 100 100" width="300" height="200"><circle cx="50%" cy="50%" r="20" fill="blue"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="red">cjs</text></svg>')
//     });
//     test('renders a square with user choice of color', () =>{
//         const shape = new Square("cjs", "red", "blue", "square");
//         shape.setColor("blue");
//         expect(generateSvg(shape)).toEqual('<svg viewBox="0 0 100 100" width="300" height="200"><rect x="10" y="10" width="80" height="80" fill="blue"/><text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill="red">cjs</text></svg>')
//     });
//     test('renders a triangle with user choice of color', () =>{
//         const shape = new Triangle("cjs", "red", "blue", "triangle");
//         shape.setColor("blue");
//         expect(generateSvg(shape)).toEqual('<svg viewBox="0 0 100 100" width="300" height="200"><polygon points="50, 10 90, 90 10, 90" fill="blue"/><text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill="red">cjs</text></svg>');
//     });
// })