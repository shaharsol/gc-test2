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
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
  ])
})


test('the board should be won horizontaly by player #1',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    [2,2,2,'E','E','E','E'],
    [1,1,1,1,'E','E','E'],
  ])
  expect(board.isWon(1)).toBe(true)
})

test('the board should not be won horizontaly by player #2',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    [2,2,2,'E','E','E','E'],
    [1,1,1,1,'E','E','E'],
  ])
  expect(board.isWon(2)).toBe(false)
})

test('the board should not be won horizontaly by player #1',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['E','E','E','E','E','E'],
    ['E','E','E','E','E','E'],
    ['E','E','E','E','E','E'],
    ['E','E','E','E','E','E'],
    ['E','E','E','E','E','E'],
    [2,2,2,'E','E','E','E'],
    [1,1,1,'E','E','E','E'],
  ])
  expect(board.isWon(1)).toBe(false)
})

test('the board should be won verticaly by player #1',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    [1,'E','E','E','E','E','E'],
    [1,2,'E','E','E','E','E'],
    [1,2,'E','E','E','E','E'],
    [1,2,'E','E','E','E','E'],
  ])
  expect(board.isWon(1)).toBe(true)
})

test('the board should not be won verticaly by player #2',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    [1,'E','E','E','E','E','E'],
    [1,2,'E','E','E','E','E'],
    [1,2,'E','E','E','E','E'],
    [1,2,'E','E','E','E','E'],
  ])
  expect(board.isWon(2)).toBe(false)
})

test('the board should not be won verticaly by player #1',() => {
  let board = new Board(6,7)
  board.setBoard([
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    ['E','E','E','E','E','E','E'],
    [1,2,'E','E','E','E','E'],
    [1,2,'E','E','E','E','E'],
    [1,2,'E','E','E','E','E'],
  ])
  expect(board.isWon(1)).toBe(false)
})
