'use strict'

/*
This function show difference between function expression and arrow expression.
*/
function g() {
    console.log(this);

    // function decoration
    // call-site this
    function doIt() {
        console.log(this)
    }

    // function expression
    const doIt2 = function() {
        console.log(this)
    };

    // arrow expression
    // lexical "this"
    const doIt3 = () => {
        console.log(this)
    }

    doIt();
    doIt2();
    doIt3();
}

var o = {id: 2, func: g}
o.func()

console.log('********************')

g()