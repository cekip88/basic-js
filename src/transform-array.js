const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {

  if(typeof arr !== 'array') throw new CustomError('Not implemented');

  let arr2 = [];

  for (let i = 0; i < arr.length; i++){
    if(arr[i] === '--discard-next'){
      i++;
    } else if(arr[i] === '--discard-prev'){
      arr2.pop();
    } else if(arr[i] === '--double-next'){
      arr2.push(arr[i + 1])
    } else if(arr[i] === '--double-prev'){
      arr2.push(arr[i - 1])
    } else {
      arr2.push(arr[i])
    }
  }

};
