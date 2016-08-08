var rollDice = function(diceSize) {
	var result = 1 + Math.floor(diceSize*Math.random())
	return result;
};

var showResult = function() {
	console.log(firstDice);
	console.log(secondDice);
	console.log(firstDice + secondDice);
};

// Global variables
var firstDice = rollDice(6);
var secondDice = rollDice(6);
showResult();
