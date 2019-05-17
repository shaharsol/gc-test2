const prompt = require('prompt-sync')();

module.exports = class View {
  constructor(game){
    this._game = game;
  }

  getHumanSelectedColumn(validColumns){
    let isValidInput = false;

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

    return selectedColumn;
  }

  showBoard(board){
    for(var r=0; r<board.length; r++){
      console.log(board[r].join(''))
    }
  }

  announceWinner(winner){
    console.log('And the winner is (drums...): %s',winner)
  }
}
