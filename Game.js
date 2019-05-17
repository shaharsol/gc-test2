const Board = require('./Board')

module.exports = class Game {
  constructor(rows,columns,player1,player2){
    this._board = new Board(rows,columns)
    this._player1 = player1;
    this._player2 = player2;
  }


  isWon(){
    return false;
  }

  start(){
    this._lastTurn = 2;
    while(!this.isWon()){
      let currentPlayer = (this._lastTurn == 1 ? this._player2 : this._player1);
      currentPlayer.move();
      this._lastTurn = (this._lastTurn == 1 ? 2 : 1);
    }
  }
}
