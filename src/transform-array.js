const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if(!Array.isArray(arr)) throw new Error();
  let resultArray = [];

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if(element === '--double-next'){
      if(i + 1 < arr.length){
        resultArray.push(arr[i + 1])
      }
      continue
    } else if (element === '--double-prev'){
      if(i - 1 >= 0){
        if(i === 1 || arr[i - 2] !== '--discard-next'){
          resultArray.push(arr[i - 1])
        }
      }
      continue
    } else if (element === '--discard-next') {
      i++;
      continue
    } else if (element === '--discard-prev') {
      if(i - 1 >= 0){
        if(arr[i - 2] !== '--discard-next'){
          resultArray.pop()
        }
      }
      continue
    } else {
      resultArray.push(element)
    }
  }
  return resultArray;
};