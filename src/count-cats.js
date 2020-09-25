const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  if(!matrix) matrix = [];
  let arr = [];
  matrix.forEach(function (el) {
    if(el instanceof Array){
      el.forEach(function (elem) {
        if(elem === '^^'){
          arr.push(elem)
        }
      })
    }
  });
  return arr.length;
  // remove line with error and write your code here
};