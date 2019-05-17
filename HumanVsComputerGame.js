const Game = require('./Game')
const HumanPlayer = require('./HumanPlayer')
const ComputerPlayer = require('./ComputerPlayer')

module.exports = class HumanVsComputerGame extends Game {

  launchPlayer1(){
    return new HumanPlayer(1,this)
  }

  launchPlayer2(){
    return new ComputerPlayer(2,this)
  }

}
