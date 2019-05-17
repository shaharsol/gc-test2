const Player = require('./Player')

module.exports = class ComputerPlayer extends Player {
  move(){
    // get valid columns
    let validColumns = this._board.getValidColumnsForMove();

    // randomly choose a column
    var selectedColumnIndex = Math.floor(Math.random() * validColumns.length);

    this._board.dropDiskToColumn(this._id,validColumns[selectedColumnIndex]);

  }
}
