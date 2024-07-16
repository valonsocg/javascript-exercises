const removeFromArray = function (arr, ...args) {
  const newArray = arr.filter((item) => !args.includes(item));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
