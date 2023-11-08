import './style.css'

// TODO game gets faster as it goes along.
// TODO snake grows in length

// So the posList array needs to be like a queue. First step is to delete the last item in the array and then based on the first item in the array, add an item to the start of the array which relates to the direction :)


// NOTE: What's important is the starting position co-ordinate

const app = document.querySelector('#app')

// NOTE: Maybe I need to have snakeCoord as an array, which is then continually updated with different co-ordinates

const game = {
  // start of array is head, end of array is tail.
  posList: [{x: 0, y: 0}], // First element is
  // posList: [{x: 0, y: 0}, {x: 0, y: 1}], // First element is
  x: 0, // 0 - 9
  y: 0, // 0 - 9
  d: 'r', // 'l', 'r', 't', 'b'
  xBoundary: 9,
  yBoundary: 9,
}

const snakeHeadMovement = ({ d, x, y }) => {
  if (d === 'r') {
    const rightBoundaryLimit = x > 9
    console.log("🚀 ~ file: main.js:31 ~ snakeHeadMovement ~ rightBoundaryLimit:", rightBoundaryLimit)
    return {
      x: rightBoundaryLimit ? 0 : x + 1,
      y
    }
  }
  if (d === 'l') {
    const leftBoundaryLimit = x < 0
    return {
      x: leftBoundaryLimit ? 9 : x - 1,
      y
    }
  }
  if (d === 't') {
    const topBoundaryLimit = y > 9
    return {
      x,
      y: topBoundaryLimit ? 0 : y + 1,
    }
  }
  if (d === 'b') {
    const topBoundaryLimit = y < 0
    return {
      x,
      y: topBoundaryLimit ? 9 : y - 1,
    }
  }
}

const startGame = () => {
  game.x = 0
  game.y = 0
  game.d = 'r'

  setInterval(function() {
    const { d, posList } = game;

    // if larger than 2, then delete the last entry, add an entry to the start, then calculate it
    if (game.posList.length > 1) {
      const snakeHead = snakeHeadMovement({
        x: posList[0].x, y: posList[0].y, d
      })
      // add to front of array.
    } else {
      const snakeHead = snakeHeadMovement({
        x: posList[0].x, y: posList[0].y, d
      })
      console.log("🚀 ~ file: main.js:81 ~ setInterval ~ snakeHead:", snakeHead)
      game.posList = [ snakeHead ]
    }
    // // Snake head movement
    // if (game.d === 'r') {
    //   game.posList[0].x += 1
    //   if (game.posList[0].x > game.xBoundary) {
    //     game.posList[0].x = 0
    //   }
    // }
    // if (game.d === 'l') {
    //   game.posList[0].x -= 1
    //   if (game.posList[0].x < 0) {
    //     game.posList[0].x = 9
    //   }
    // }
    // if (game.d === 't') {
    //   game.posList[0].y += 1
    //   if (game.posList[0].y > game.yBoundary) {
    //     game.posList[0].y = 0
    //   }
    // }
    // if (game.d === 'b') {
    //   game.posList[0].y -= 1
    //   if (game.posList[0].y < 0) {
    //     game.posList[0].y = 9
    //   }
    // }

    const snake = document.createElement('div')
    snake.classList.add('absolute', 'bottom-0', 'left-0', 'h-[40px]', 'w-[40px]', 'bg-green-500', 'rounded-xs', 'border')
    snake.style.transform = `translate(${40 * posList[0].x}px, -${40 * posList[0].y}px)`

    app.innerHTML = ''
    app.appendChild(snake)

  }, 1000);
}

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37: // l
      game.d = 'l'
    break;
    case 38: // t
      game.d = 't'
    break;
    case 39: // r
      game.d = 'r'
    break;
    case 40: // b
      game.d = 'b'
    break;
  }
};

startGame()
