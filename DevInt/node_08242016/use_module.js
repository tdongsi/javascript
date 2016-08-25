'use strict';

const util = require('util');
const fs = require('fs');
// Essentially, "exports" object in module.js is assigned to myModule.
const myModule = require('./module');

myModule.doIt("This is fun");

// simulate what node-inspector does
function myRequire2(fileName) {
    var moduleCode = fs.readFileSync(fileName + '.js', 'utf8');
    var exports = {};

    // This "generated" is similarly constructed by node-inspector
    // Here, we only implement the first input: exports
    // In node-inspector, it takes 5 input: exports, require, module, __file, __dir
    var generated = `(function(exports) { ${moduleCode} })`;
    console.log(generated);
    var moduleFn = eval(generated);
    moduleFn(exports);
    return exports;
}

var temp = myRequire2("./module");
console.log(temp);
temp.doIt("this is fun");