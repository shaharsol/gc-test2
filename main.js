const Game = require('./Game')
const HumanPlayer = require('./HumanPlayer')
const ComputerPlayer = require('./ComputerPlayer')

const ROWS = 6;
const COLUMNS = 7;
const player1 = new HumanPlayer();
const player2 = new ComputerPlayer();


let game = new Game(ROWS,COLUMNS,player1,player2);
game.start()
