module.exports = class Player {

    constructor(id,game){
      this._id = id;
      this._game = game;
    }

    getID(){
      return this._id;
    }

    move(){
      let validColumns = this._game.getBoard().getValidColumnsForMove();
      if(validColumns == []){
        return false;
      }else{
        let selectedColumn = this.selectColumn(validColumns);
        this._game.getBoard().dropDiskToColumn(this._id,selectedColumn);
        this._game.announceStep(this._id,selectedColumn);
        return true;
      }
    }

    // abstract function, must be implemented by decendants
    selectColumn(validColumns){

    }
}
