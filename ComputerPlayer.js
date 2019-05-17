const Player = require('./Player')
const util = require('util')

module.exports = class ComputerPlayer extends Player {
  move(){
    // get valid columns
    let validColumns = this._board.getValidColumnsForMove();
console.log(util.inspect(validColumns))

    // randomly choose a column
    var selectedColumnIndex = Math.floor(Math.random() * validColumns.length);

    this._board.dropDiskToColumn(this._id,validColumns[selectedColumnIndex]);

  }
}
