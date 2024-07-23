const findTheOldest = function (arr) {
  const currentYear = new Date().getFullYear();

  const sortedArray = arr.sort((a, b) => {
    const ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
    const ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;
    if (ageA > ageB) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
