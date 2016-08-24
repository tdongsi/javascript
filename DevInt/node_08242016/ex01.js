"use strict";

var x=0, y=0, funcs=[];

for (; x<5; x++) {

    // Problem: Make the code print out 0 to 4.
    // Rule 1: you can modify the code between this
    // Rule 2: you cannot invoke console.log in the first loop
    // Rule 3: you cannot use y in the console.log

    const t = x;

    funcs.push(function() {
        console.log(t);
    });
    // Rule 1 (cont): and here ONLY 
}

for (; y < 5; y++) {
    funcs[y]();
}
