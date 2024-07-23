const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, first) => acc + first, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, first) => acc * first, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  if (num === 0) return 1;
  let acc = 1;
  for (let i = 1; i <= num; i++) {
    acc *= i;
  }
  return acc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
