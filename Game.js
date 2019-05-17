const Board = require('./Board')
const View = require('./View')

module.exports = class Game {
  constructor(rows,columns){
    // create a fresh board
    this._board = new Board(rows,columns);
    this._view = new View();

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

  getHumanSelectedColumn(validColumns){
    return this._view.getHumanSelectedColumn(validColumns)
  }

  announceStep(playerID,column){
    this._view.announceStep(playerID,column);
  }

  start(){
    let isGameOver = false;
    this._lastTurn = 2; // i.e it will start with player #1
    while(!this.isWon() && !isGameOver){
      let currentPlayer = (this._lastTurn == 1 ? this._player2 : this._player1);
      isGameOver = !currentPlayer.move();
      this._view.showBoard(this._board.getBoard());
      this._lastTurn = (this._lastTurn == 1 ? 2 : 1);
    }
    if(isGameOver){
      this._view.announceGameOver();
    }else{
      this._view.announceWinner(this._board.isWon(this._player1.getID()) ? 'player #1' : 'player #2')
    }
  }
}
