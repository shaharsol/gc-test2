const Board = require('./Board')

module.exports = class Game {
  constructor(rows,columns){
    // create a fresh board
    this._board = new Board(rows,columns)

    // init the two players according to what determined in the decendant class
    this._player1 = this.launchPlayer1();
    this._player2 = this.launchPlayer2();
  }

  // abstract method
  launchPlayer1(){
    // override in decendants
  }

  // abstract method
  launchPlayer2(){
    // override in decendants
  }

  getBoard(){
    return this._board;
  }

  isWon(){
    return this._board.isWon(this._player1.getID()) || this._board.isWon(this._player2.getID())
  }

  start(){
    this._lastTurn = 2; // i.e it will start with player #1
    this._turnCount = 0;
    while(!this.isWon()){
      console.log('turn #%s',this._turnCount)
      let currentPlayer = (this._lastTurn == 1 ? this._player2 : this._player1);
      currentPlayer.move();
      this._lastTurn = (this._lastTurn == 1 ? 2 : 1);
      this._turnCount++;
    }
  }
}
