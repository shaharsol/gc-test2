const EMPTY = '_';

module.exports = class Board {
  constructor(rows,columns){
    this._rows = rows;
    this._columns = columns
    this._board = [];

    // init the board
    for(var r=0;r<rows;r++){
      let cols = [];
      for(var c=0;c<columns;c++){
        cols[c] = EMPTY;
      }
      this._board[r] = cols;
    }

  }

  // this function is mainly for tests, no actual usage for end user.
  setBoard(board){
    this._board = board;
  }

  // this function is mainly for tests, no actual usage for end user.
  getBoard(){
    return this._board;
  }

  getValidColumnsForMove(){
    let validColumns = [];
    for(var c=0;c<this._columns;c++){
      if(this._board[0][c] == EMPTY){
        validColumns.push(c)
      }
    }
    return validColumns;
  }

  dropDiskToColumn(player,column){
    for(var r=this._rows-1;r>=0;r--){
      if(this._board[r][column] == EMPTY){
        this._board[r][column] = player;
        break;
      }
    }
  }

  isWon(player){
    return this.isWonHorizontal(player) || this.isWonVertical(player) || this.isWonDiagonal(player)
  }

  isWonHorizontal(player){
    let chars = [];
    for(var i=0;i<4;i++){
      chars.push(player);
    }
    let compareString = chars.join('')

    for(var r=0;r<this._rows;r++){
      let columnString = this._board[r].join('')
      if(columnString.indexOf(compareString) > -1){
        return true;
      }
    }
    return false;
  }

  isWonVertical(player){
    let chars = [];
    for(var i=0;i<4;i++){
      chars.push(player);
    }
    let compareString = chars.join('')

    for(var c=0;c<this._columns;c++){
      let rowString = '';
      for(var r=0;r<this._rows;r++){
        rowString += this._board[r][c];
      }
      if(rowString.indexOf(compareString) > -1){
        return true;
      }
    }
    return false;

  }

  isWonDiagonal(player){
    return false;
  }

}
