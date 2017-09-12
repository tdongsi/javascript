var taxRate = 0.09;

var computeTotal = function(price) {
    var taxRate = 0.09;
    var tax = taxRate * price;
    return tax + price;
};

console.log(computeTotal(5.99))
console.log(computeTotal(9.99))

var addHtmlTag = function(tag, content) {
    var openTag = "<" + tag + ">";
    var closeTag = "</" + tag + ">";
    return openTag + content + closeTag;
};

console.log(addHtmlTag("p", "hello"));
console.log(addHtmlTag("div", "hello"));

var toCardString = function(rank, suit) {
    return rank + " of " + suit;
};
console.log(toCardString("two", "diamonds"));
console.log(toCardString("queen", "hearts"));
