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

/*
Which function declaration should be used?
Most of the time, use arrow expression.
Use function expression when you definitely want protoype inheritance.
*/

// IIFE - immediately invoked function expression
// Restrict scope t into local variable scope, instead of global scope when outside function.
(function() {
    var t = 10;
    console.log(t);
}) ();

