const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  //throw new CustomError('Not implemented');

  if(!sampleActivity) return false;
  if(typeof sampleActivity !== 'string') return false;

  sampleActivity = sampleActivity * 1;

  if(isNaN(sampleActivity)) return false;
  if(sampleActivity <= 0) return false;
  if(sampleActivity > MODERN_ACTIVITY) return false;

  let k = Math.log(sampleActivity / MODERN_ACTIVITY) / HALF_LIFE_PERIOD;
  let t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;

  t = Math.round(t);

  return t;

};
