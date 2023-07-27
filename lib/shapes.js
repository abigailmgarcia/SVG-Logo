class Shapes {
    constructor(type, color){
        this.type = type;
        this.color = color;
    }

    render(){
        throw new Error('not implement');
    }
}

module.exports = Shapes;

// function add(a, b){
//     return a +b;
// };
// module.exports = { add };