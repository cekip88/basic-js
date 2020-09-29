const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let arr = [];
  if(!(members instanceof Array)) return false;
  members.forEach(function (element) {
    if(typeof element === 'string'){
      let letter = ' ', i = 0;
      while(letter === ' '){
        letter = element[i];
        i++;
      }
      letter = letter.toUpperCase();
      arr.push(letter)
    }
  });
  arr.sort();
  let str = '';
  arr.forEach(function (el) {
    str += el;
  });
  return str
};
