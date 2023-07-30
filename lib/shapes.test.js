const { Circle, Square, Triangle, generateSvg } = require('./shapes');

describe('generateSvg', () => {
  test('renders a circle with user choice of color', () => {
    const shape = new Circle('abc', 'red', 'blue', 'circle');
    shape.setColor('blue');
    expect(shape.render()).toEqual(
      '<svg viewBox="0 0 100 100" width="300" height="200"><circle cx="50%" cy="50%" r="20" fill="blue"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="red">abc</text></svg>'
    );
  });

  test('renders a square with user choice of color', () => {
    const shape = new Square('abs', 'white', 'green', 'square');
    shape.setColor('green');
    expect(shape.render()).toEqual(
      '<svg viewBox="0 0 100 100" width="300" height="200"><rect x="10" y="10" width="80" height="80" fill="green"/><text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill="white">abs</text></svg>'
    );
  });

  test('renders a triangle with user choice of color', () => {
    const shape = new Triangle('abc', 'pink', 'grey', 'triangle');
    shape.setColor('grey');
    expect(shape.render()).toEqual(
      '<svg viewBox="0 0 100 100" width="300" height="200"><polygon points="50, 10 90, 90 10, 90" fill="grey"/><text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill="pink">abc</text></svg>'
    );
  });
});
