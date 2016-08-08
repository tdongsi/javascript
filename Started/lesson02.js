var rollDice = function() {
	return 1 + Math.floor(6*Math.random());
};

var firstDice = rollDice();
var secondDice = rollDice();

console.log(firstDice);
console.log(secondDice);
console.log(firstDice + secondDice);
