### Installing

```
npm install
```

### Running the tests

```
npm test
```

### Running the game

```
npm start
```

### Creating new player types

In order to create a new player type, say, a super computer, You'd create a `class SuperComputer extends Player` and will only have to implement the `selectColumn` method.

### Creating new game combinations

To create different sets of player combinations, say, human vs super computer, you'd create a `class HumanVsSuperComputer extends Game` and will have to implement both abstract methods `launchPlayer1` and `launchPlayer2` where you will create and return new instances of `HumanPlayer` and `SuperComputerPlayer` respectively. You will also have to create an instance of your new `HumanVsSuperComputer` in `main.js`.

### Notes

  * I use abstract functions in this implementation. Javascript doesn't support abstract functions and classes yet. There are some hacks and workarounds that are nowhere native, so I decided to leave it as it is, as the purpose is to demonstrate OO design, using abstract functions IMHO is very elegant, and I didn't want to switch my goto language.
