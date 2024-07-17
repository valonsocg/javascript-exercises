const convertToCelsius = function (temp) {
  const newTemp = (temp - 32) * (5 / 9);
  return parseFloat(newTemp.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  const newTemp2 = temp * (9 / 5) + 32;
  return parseFloat(newTemp2.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
