const Board = require('./Board')

module.exports = class Game {
  constructor(rows,columns,player1,player2){
    this._board = new Board(rows,columns)
    this._player1 = player1;
    this._player2 = player2;
  }

  start(){
    console.log('starting')
  }
}
