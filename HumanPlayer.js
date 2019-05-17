const Player = require('./Player')


module.exports = class HumanPlayer extends Player {

  move(){

    let validColumns = this._game.getBoard().getValidColumnsForMove();
    let selectedColumn = this._game.getHumanSelectedColumn(validColumns);
    this._game.getBoard().dropDiskToColumn(this._id,selectedColumn);

  }
}
