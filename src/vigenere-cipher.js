const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
  }

  validateIncomeData(message,key){
    if (!message || !key) throw new CustomError('Not implemented');
  }
  validateResult(result){
    if(this.bool === false){
      let res = '';
      for (let i = result.length; i; i--){
        res += result[i - 1]
      }
    }
    result = result.toUpperCase();
    return result;
  }

  encrypt(message,key) {
    this.validateIncomeData(message,key);
    let result = '';

    return this.validateResult(result);
  }

  decrypt(message,key) {
    this.validateIncomeData(message,key);
    let result = '';

    return this.validateResult(result);
  }
}

module.exports = VigenereCipheringMachine;
