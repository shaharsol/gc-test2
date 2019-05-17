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

  getValidColumnsForMove(){
    let validColumns = [];
    for(var r=0;r<this._rows;r++){
      if(this._board[r][0] == 'E'){
        validColumns.push(r)
      }
    }
    return validColumns;
  }

  dropDiskToColumn(player,column){
    for(var r=this._rows-1;r>=0;r--){
      if(this._board[r][column] == 'E'){
        this._board[r][column] = player;
        break;
      }
    }
    this.display();
  }

  display(){
    for(var r=0;r<this._rows;r++){
      console.log(this._board[r].join(''))
    }
  }

}
