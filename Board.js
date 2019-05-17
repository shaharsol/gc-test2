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
    console.log('last move by player %s, dropped disk to column %s',player,column)
    this.display();
  }

  display(){
    for(var r=0;r<this._rows;r++){
      console.log(this._board[r].join(''))
    }
  }

  isWon(player){

    let chars = [];
    for(var i=0;i<2;i++){
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

}
