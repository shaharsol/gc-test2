const prompt = require('prompt-sync')();
const Player = require('./Player')


module.exports = class HumanPlayer extends Player {

  move(){

    let isValidInput = false;
    let validColumns = this._board.getValidColumnsForMove();

    while(!isValidInput){
      console.log('Valid columns are %s',validColumns.join(','))

      // var selectedColumn = this._prompt('column number to drop disk to?');
      var selectedColumn = prompt('column number to drop disk to?');

      if(validColumns.indexOf(Number(selectedColumn)) > -1){
        isValidInput = true;
      }else{
        console.log('Please select a valid column only!');
      }

    }

    this._board.dropDiskToColumn(this._id,selectedColumn);

  }
}
