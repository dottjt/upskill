
export function calculateWinner(boardArray) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Create an array of X positions
  // Create an array of O positions
  // Iterate through lines and see if there are any winning combinations

  const xIndexPositions = []
  const yIndexPositions = []

  for (let k = 0; k < boardArray.length; k++) {
    if (boardArray[k] === 'X') {
      xIndexPositions.push(k)
    }
    if (boardArray[k] === 'Y') {
      yIndexPositions.push(k)
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const solutionArray = lines[i]
    let xCounter = 0
    let oCounter = 0
    for (let j = 0; j < solutionArray.length; j++) {
      if (xIndexPositions.includes(solutionArray[j])) {
        xCounter += 1
      }
      if (yIndexPositions.includes(solutionArray[j])) {
        oCounter += 1
      }
    }
    if (xCounter === 3) {
      return 'X'
    }
    if (oCounter === 3) {
      return 'O'
    }
  }

  return null
}
