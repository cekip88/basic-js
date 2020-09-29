const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let turns = 1;
  for (let i = 0; i < disksNumber; i++){
    turns = turns * 2;
  }
  turns = turns - 1;
  turnsSpeed = turnsSpeed / 3600;
  let time = Math.floor(turns / turnsSpeed);
  return {'turns' : turns, 'seconds' : time}
};
