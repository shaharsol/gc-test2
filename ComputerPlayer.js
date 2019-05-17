const Player = require('./Player')
const util = require('util')

module.exports = class ComputerPlayer extends Player {

  selectColumn(validColumns){
    let selectedColumnIndex = Math.floor(Math.random() * validColumns.length);
    return validColumns[selectedColumnIndex];
  }

}
