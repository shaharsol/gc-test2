const HumanVsComputerGame = require('./HumanVsComputerGame')

const ROWS = 6;
const COLUMNS = 7;

let game = new HumanVsComputerGame(ROWS,COLUMNS);

game.start()
