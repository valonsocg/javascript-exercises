const palindromes = function (str) {
  const cleanStr = str
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?\s]/g, "")
    .toLowerCase();
  const reverseStr = cleanStr.split("").reverse().join("");
  return cleanStr === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
