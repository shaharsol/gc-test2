const Player = require('./Player')

module.exports = class HumanPlayer extends Player {

  move(){
    console.log('human player move')
  }
}
