module.exports = class Player {

    constructor(id){
      this._id = id;
    }

    setBoard(board){
      this._board = board;
    }

    getID(){
      return this._id;
    }

    move(){

    }
}
