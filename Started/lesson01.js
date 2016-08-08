var totalCost = 14.95;

var number = process.argv[2]
console.log(process.argv)
var average = totalCost/number;

console.log("$" + average);

var helloWorld = function(name) {
	console.log("Hello " + name);
}

helloWorld("World");