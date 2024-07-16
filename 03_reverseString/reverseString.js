//Split, reverse, join

const reverseString = function (str) {
  const splittedStr = str.split("");
  const reversedArray = splittedStr.reverse();
  return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
