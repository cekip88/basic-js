const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
    this.alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    this.reg = new RegExp(/[a-z]/);
  }

  validateIncomeData(message,key){
    if (!message || !key) throw new Error();
  }
  reverseText(text){
    let res = '';
    for (let i = text.length; i; i--){
      res += text[i - 1]
    }
    text = res;
    return text;
  }

  encrypt(message,key) {
    this.validateIncomeData(message,key);
    message = message.toLowerCase();
    key = key.toLowerCase();
    let index = 0, int = 0, result = '';
    for (let i = 0; i < message.length; i++){
      if(this.reg.test(message[i])){
        let mesNum = this.alphabet.indexOf(message[i]), keyNum = this.alphabet.indexOf(key[int]);
        index = mesNum + keyNum;
        if(index >= this.alphabet.length) index -= this.alphabet.length;
        int++;
        if(int === key.length) int = 0;
        result += this.alphabet[index];
      } else {
        result += message[i];
      }
    }
    if(this.bool === false) result = this.reverseText(result);
    return result.toUpperCase();
  }

  decrypt(message,key) {
    this.validateIncomeData(message,key);
    message = message.toLowerCase();
    key = key.toLowerCase();
    let index = 0, int = 0, result = '';
    for (let i = 0; i < message.length; i++){
      if(this.reg.test(message[i])){
        let mesNum = this.alphabet.indexOf(message[i]), keyNum = this.alphabet.indexOf(key[int]);
        index = mesNum - keyNum;
        if(index < 0) index += 26;
        int++;
        if(int === key.length) int = 0;
        result += this.alphabet[index];
      } else {
        result += message[i];
      }
    }
    if(this.bool === false) result = this.reverseText(result);
    return result.toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
