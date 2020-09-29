const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    const _ = this;
    let array = [];
    arr.forEach(function (el) {
      if(Array.isArray(el)){
        array.push(el)
      }
    });

    if(!array.length) return 1;

    let depth = 0;
    array.forEach(function (el) {
      let i = _.calculateDepth(el);
      if (i > depth) depth = i;
    });
    depth++;
    console.log(depth);
    return depth;
  }
};