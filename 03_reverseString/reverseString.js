const reverseString = function(word) {
    // long way
    const wordArray = word.split("");
    const reversed = wordArray.reverse();
    return reversed.join("");

    // shorter version
    //return word.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
