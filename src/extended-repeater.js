const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  //throw new CustomError('Not implemented');
  let cnt = options.repeatTimes ? options.repeatTimes : 1;
  let addCnt = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  let sep = '+';
  let add = '';
  let addsep = '';

  if(options.separator !== undefined) sep = options.separator;
  if(options.addition !== undefined) add = options.addition;
  if(options.additionSeparator !== undefined) addsep = options.additionSeparator;

  if(typeof str !== "string") str = str + '';
  if(typeof add !== "string") add = add + '';

  let result = '';
  for (let i = 0; i < cnt; i++){
    result += str;
    for (let j = 0; j < addCnt; j++){
      result += add;
      if(j !== addCnt - 1){
        result += addsep;
      }
    }
    if(i !== cnt - 1){
      result += sep;
    }
  }

  return result;
};