const Player = require('./Player')


module.exports = class HumanPlayer extends Player {

  getSelectedColumn(validColumns){
    return this._game.getHumanSelectedColumn(validColumns);
  }

}
