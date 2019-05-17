module.exports = class Player {

    constructor(id,board){
      this._id = id;
      this._board = board;
    }

    getID(){
      return this._id;
    }

    // abstract method, must be implemented by decendant
    move(){

    }
}
