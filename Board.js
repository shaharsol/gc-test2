module.exports = class Board {
  constructor(rows,columns){
    this._rows = rows;
    this._columns = columns
    this._board = [];

    // init the board
    for(var r=0;r<rows;r++){
      let cols = [];
      for(var c=0;c<columns;c++){
        cols[c] = 'E';
      }
      this._board[r] = cols;
    }

  }
}
