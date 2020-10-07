const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : {},
  getLength() {
    let i = 0;
    for (let key in this.chain){
      i++;
    }
    return i;
  },
  addLink(value) {
    if(!value === undefined) value = ' ';
    if(typeof value !== 'string') value = value + '';
    let pos = 0;
    for (let key in this.chain){
      let i = key * 1;
      if(pos < i) pos = i;
    }
    pos = pos + 1;
    this.chain[pos] = value;
    return chainMaker;
  },
  removeLink(position) {
    if (typeof position !== 'number' || (isNaN(position)) || (position % 1))  {
      this.chain = {};
      throw new Error();
    }

    if(this.chain[`${position}`] === undefined) {
      this.chain = {};
      throw new Error();
    }

    delete this.chain[`${position}`];
    for (let key in this.chain){
      if (key > position) {
        this.chain[key - 1] = this.chain[key];
        delete this.chain[key]
      }
    }
    return chainMaker;
  },
  reverseChain() {
    let arr = [];
    for (let key in this.chain){
      arr.push('a' + key)
    }
    let i = arr.length - 1;
    for (let key in this.chain){
      this.chain[arr[i]] = this.chain[key];
      i--;
      delete this.chain[key]
    }
    for (let key in this.chain){
      this.chain[key.substr(1,key.length)] = this.chain[key];
      delete this.chain[key]
    }
    return chainMaker;
  },
  finishChain() {
    let str = '';
    let arr = [];
    for(let key in this.chain){
      arr.push(key * 1)
    }
    arr.sort();
    let obj = this.chain;
    arr.forEach(function (el,i) {
      if(i === arr.length - 1){
        str += `( ${obj[el]} )`
      } else {
        str += `( ${obj[el]} )~~`
      }
    });
    this.chain = {};
    return str;
  }
};

module.exports = chainMaker;
