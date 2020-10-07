const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {

  if(!Array.isArray(arr)) throw new Error();

  let arr2 = [];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {}

    else if (arr[i] === '--discard-prev') {
      if(i > 0){
        let prevArr2 = arr2[arr2.length - 1], prevArr = arr[i - 1];
        if(isNaN(prevArr2)) {
          prevArr2 += '';
          prevArr += '';
        }
        if (prevArr2 === prevArr) {
          arr2.pop()
        }
      }
    }

    else if (arr[i] === '--double-prev') {
      if(i > 0){
        let prevArr2 = arr2[arr2.length - 1], prevArr = arr[i - 1];
        if(isNaN(prevArr2)){
          prevArr2 += '';
          prevArr += ''
        };
        if (prevArr2 === prevArr) {
          arr2.push(arr2[arr2.length - 1])
        }
      }
    }

    else if (arr[i] === '--double-next') {
      if (arr.length > i + 1) {
        arr2.push(arr[i + 1])
      }
    }

    else {
      if (arr[i - 1] !== '--discard-next') {
        arr2.push(arr[i])
      }
    }
  }
  return arr2;
};


