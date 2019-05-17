const Board = require('../Board')

test('the board should be initialized to 6 rows, not columns',() => {
  let board = new Board(6,7)
  expect(board.getBoard().length).toBe(6)
})

test('the board should be initialized to 7 columns, not rows',() => {
  let board = new Board(6,7)
  expect(board.getBoard()[0].length).toBe(7)
})

test('the board should be initialized to all Es',() => {
  let board = new Board(6,7)
  expect(board.getBoard()).toEqual([
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
  ])
})


test('the board should be won horizontaly by player #1',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    [2,2,2,'_','_','_','_'],
    [1,1,1,1,'_','_','_'],
  ])
  expect(board.isWon(1)).toBe(true)
})

test('the board should not be won horizontaly by player #2',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    [2,2,2,'_','_','_','_'],
    [1,1,1,1,'_','_','_'],
  ])
  expect(board.isWon(2)).toBe(false)
})

test('the board should not be won horizontaly by player #1',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['_','_','_','_','_','_'],
    ['_','_','_','_','_','_'],
    ['_','_','_','_','_','_'],
    ['_','_','_','_','_','_'],
    ['_','_','_','_','_','_'],
    [2,2,2,'_','_','_','_'],
    [1,1,1,'_','_','_','_'],
  ])
  expect(board.isWon(1)).toBe(false)
})

test('the board should be won diaginally by player #1',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['_','_','_','_','_','_'],
    ['_','_','_','_','_','_'],
    ['_','_','_','_','_','_'],
    ['_','_','_',1,'_','_'],
    ['_','_',1,'_','_','_'],
    [2,1,2,'_','_','_','_'],
    [1,1,1,'_','_','_','_'],
  ])
  expect(board.isWon(1)).toBe(false)
})

test('the board should not be won diaginally by player #1',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['_','_','_','_','_','_'],
    ['_','_','_','_','_','_'],
    ['_','_','_','_','_','_'],
    ['_','_','_','_',1,'_'],
    ['_','_',1,'_','_','_'],
    [2,1,2,'_','_','_','_'],
    [1,1,1,'_','_','_','_'],
  ])
  expect(board.isWon(1)).toBe(false)
})

test('the board should be won verticaly by player #1',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    [1,'_','_','_','_','_','_'],
    [1,2,'_','_','_','_','_'],
    [1,2,'_','_','_','_','_'],
    [1,2,'_','_','_','_','_'],
  ])
  expect(board.isWon(1)).toBe(true)
})

test('the board should not be won verticaly by player #2',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    [1,'_','_','_','_','_','_'],
    [1,2,'_','_','_','_','_'],
    [1,2,'_','_','_','_','_'],
    [1,2,'_','_','_','_','_'],
  ])
  expect(board.isWon(2)).toBe(false)
})

test('the board should not be won verticaly by player #1',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    ['_','_','_','_','_','_','_'],
    [1,2,'_','_','_','_','_'],
    [1,2,'_','_','_','_','_'],
    [1,2,'_','_','_','_','_'],
  ])
  expect(board.isWon(1)).toBe(false)
})
