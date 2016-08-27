"use strict";

const parent = {
    amt: 1000
}

const child = Object.create(parent);
parent.amt = 2000

// Getter goes up prototype chain
console.log(child.amt);

// Setter creates a new attribute in child object
child.amt = 5
console.log(child.amt);
console.log(parent.amt);

delete child.amt;
console.log(child.amt);
