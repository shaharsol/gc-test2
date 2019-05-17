module.exports = class Player {

    constructor(id,game){
      this._id = id;
      this._game = game;
    }

    getID(){
      return this._id;
    }

    // abstract method, must be implemented by decendant
    move(){

    }
}
