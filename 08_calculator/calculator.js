const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0)
};

const multiply = function(arr) {
  return arr.reduce((a, b) => a * b)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(x) {
  // if (x === 0){
  //   return 1
  // } else {
  //   let array = [...Array(x+1).keys()]
  //   return array.slice(1).reduce((a, b) => a * b)
  // }

  return x === 0 ? 1 : [...Array(x+1).keys()].slice(1).reduce((a, b) => a * b)

  // RECURSICE algo
  // const recursiveFactorial = function (n) {
  //   if (n === 0) {
  //     return 1;
  //   }
  //   return n * recursiveFactorial(n - 1);
  // };
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
