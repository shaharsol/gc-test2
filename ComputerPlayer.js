const Player = require('./Player')
const util = require('util')

module.exports = class ComputerPlayer extends Player {
  move(){
    // get valid columns
    let validColumns = this._game.getBoard().getValidColumnsForMove();

    // randomly choose a column
    var selectedColumnIndex = Math.floor(Math.random() * validColumns.length);

    // make the move
    this._game.getBoard().dropDiskToColumn(this._id,validColumns[selectedColumnIndex]);

  }
}
