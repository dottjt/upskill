import { calculateWinner } from './calculateWinner'
import './style.css'

// TODO Figure out whether a game is draw prior to the last piece being placed

const gameState = {
  playerTurn: 'X', // 'X', 'O'
  boardState: new Array(9).fill(null),
}

const infoElement = document.querySelector('#ttt-info')
const boardElement = document.querySelector('#ttt-board')

const tileClickEvent = function(event, index) {
  const element = event.currentTarget

  if (element.innerHTML) return

  element.innerHTML = gameState.playerTurn

  gameState.boardState[index] = gameState.playerTurn

  if (gameState.playerTurn === 'X') {
    element.classList.add('bg-violet-300')
  } else {
    element.classList.add('bg-orange-300')
  }

  const hasWon = calculateWinner(gameState.boardState)
  if (hasWon) {
    alert(`${hasWon} has won!`)

    gameState.playerTurn = 'X'

    initialiseBoard()
  }

  if (gameState.boardState.find((item) => item === null) === undefined) {
    alert('Draw')
    initialiseBoard()
  }

  // NOTE: Update game state
  gameState.playerTurn = gameState.playerTurn === 'X' ? 'O' : 'X'
  infoElement.innerHTML = `Player Turn: ${gameState.playerTurn}`
}

export const initialiseBoard = () => {
  boardElement.innerHTML = null
  gameState.boardState = Array(9).fill(null)

  // NOTE: Create board
  gameState.boardState.forEach((_arrayEntry, index) => {
    const tileElement = document.createElement('div');
    tileElement.classList.add(...[
      'ttt-tile-' + index,
      'box-border',
      'border',
      'border-black',
      'flex',
      'items-center',
      'justify-center',
      'rounded-md',
    ])

    tileElement.addEventListener('click', (event) => tileClickEvent(event, index))

    boardElement.appendChild(tileElement)
  })

  // NOTE: Create Info Element
  const infoElement = document.querySelector('#ttt-info')
  infoElement.innerHTML = `Player Turn: ${gameState.playerTurn}`
}

initialiseBoard()
