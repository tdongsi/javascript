var taxRate = 0.09;

var computeTotal = function(price) {
    var taxRate = 0.09;
    var tax = taxRate * price;
    return tax + price;
};

console.log(computeTotal(5.99))
console.log(computeTotal(9.99))

var addTag = function(tag, content) {
    var openTag = "<" + tag + ">";
    var closeTag = "</" + tag + ">";
    return openTag + content + closeTag;
};

console.log(addTag("p", "hello"))
console.log(addTag("div", "hello"))