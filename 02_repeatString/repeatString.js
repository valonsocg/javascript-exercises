const repeatString = function (text, number) {
  if (number < 0) return "ERROR";
  let txt = "";
  for (let i = 1; i <= number; i++) {
    txt += text;
  }
  return txt;
};

// Do not edit below this line
module.exports = repeatString;
