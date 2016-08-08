var rollDice = function(diceSize) {
	var result = 1 + Math.floor(diceSize*Math.random())
	return result;
};

for (var i = 0; i < 10; i+= 1) {
	var roll = rollDice(6);

	if (roll == 6) {
		console.log("Great roll!!!");
	} else if (roll == 1) {
		console.log("Terrible roll.");
	} else {
		console.log("An okay roll.");
	}

	console.log("You rolled a " +  roll);
}
