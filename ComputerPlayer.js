const Player = require('./Player')

module.exports = class ComputerPlayer extends Player {
  move(){
    console.log('computer player move')
  }
}
