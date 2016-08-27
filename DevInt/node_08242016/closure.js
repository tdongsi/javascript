"use strict";

function outer() {
    let t = "test";

    // Usage of closure: Update variable
    // Here, t is updated after 2 seconds.
    // function is defined just to access "t" by closure.
    setTimeout(function() {
        t = "test is over";
    }, 2000);

    function inner() {
        console.log(t);
    }

    return inner;
}

const fn = outer();
fn();

// After two seconds, t is modified to "test is over".

// This will run after three seconds.
setTimeout(function() {
    fn();
}, 3000);