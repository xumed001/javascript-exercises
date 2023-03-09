const palindromes = function (word) {
    let newWord = word.replace(/[^a-z]/gi, '').toLowerCase()
    return newWord === newWord.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
