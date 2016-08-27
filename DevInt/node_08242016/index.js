function doIt() {
    console.log('do it');
}

doIt();

var t = 5;
console.log(typeof t);

// Each symbol is unique.
t = Symbol('my symbol');
console.log(typeof t);

var o = {
    id: 2,
    name: 'Bob'
};

// TODO: check this new feature
// for (let x of items[Symbol.iterator]) {}

t = [];
console.log(typeof t);
console.log(t instanceof Array);

t = null;
console.log(typeof t); // a bug

// These two are equivalent
console.log(t === null || t === undefined);
console.log(t == null);

// difference between triple equals and double equals
console.log("1" == 1); // true
console.log("1" === 1); // false


