const Player = require('./Player')


module.exports = class HumanPlayer extends Player {

  selectColumn(validColumns){
    return this._game.getHumanSelectedColumn(validColumns);
  }

}
