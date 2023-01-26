const removeFromArray = function(a, ...args) {
    // solution using 2 array methonds
    // filter(): creates a new array with only elements that passes the condition inside the provided function.
    // includes(): checks if an array includes the element that passes the condition, returning true or false as appropriate.
    return a.filter(element => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
