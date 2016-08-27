console.log(exports === module.exports);

// if there is another line like this.
// exports = {}
// "exports" is now another object, different from module.exports

exports.doIt = function(msg) {
    console.log(`do it: ${msg}`);
};


