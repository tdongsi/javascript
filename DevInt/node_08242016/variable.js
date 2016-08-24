// old way
var t = 10;

// new way: ES 2015
const t = 10; // immutable
let s = "value"; // mutable


// function decoration
// Different from function expression: hoisted to the top of the scope.
function doIt() {
    console.log('doIt')
}

// function expression
const doIt2 = function() {
    console.log('doIt2')
};

// arrow expression
const doIt3 = () => {
    console.log('doIt3')
}
