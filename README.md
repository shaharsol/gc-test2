### Installing

```
npm install
```

### Running the tests

```
npm run test
```

### Running the game

```
npm start
```

### Changing player types and game combinations

In order to create a new player type, say, a super computer, You'd create a `class SuperComputer extends Player` and will only have to implement the `selectColumn` method.

To create different sets of player combinations, say, human vs super computer, you'd create a `class HumanVsSuperComputer extends Game` and will have to implement both abstract methods `launchPlayer1` and `launchPlayer2` where you will create and return new instances of `HumanPlayer` and `SuperComputerPlayer` respectively
