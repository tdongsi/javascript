'use strict';

const util = require('util')
// Essentially, "exports" object in module.js is assigned to myModule.
const myModule = require('./module')

myModule.doIt("This is fun");
