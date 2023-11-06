import './style.css'

// TODO game gets faster as it goes along.
// TODO snake grows in length

// NOTE: What's important is the starting position co-ordinate

const app = document.querySelector('#app')

// NOTE: Maybe I need to have snakeCoord as an array, which is then continually updated with different co-ordinates

const game = {
  posList: [{x: 0, y: 0}], // First element is
  x: 0, // 0 - 9
  y: 0, // 0 - 9
  d: 'r', // 'l', 'r', 't', 'b'
  xBoundary: 9,
  yBoundary: 9,
  snakeCoord: {
    snakeTailLength: 1,
  },
}



const startGame = () => {
  game.x = 0
  game.y = 0
  game.d = 'r'

  setInterval(function() {
    // Snake head movement
    if (game.d === 'r') {
      game.posList[0].x += 1
      if (game.posList[0].x > game.xBoundary) {
        game.posList[0].x = 0
      }
    }
    if (game.d === 'l') {
      game.posList[0].x -= 1
      if (game.posList[0].x < 0) {
        game.posList[0].x = 9
      }
    }
    if (game.d === 't') {
      game.posList[0].y += 1
      if (game.posList[0].y > game.yBoundary) {
        game.posList[0].y = 0
      }
    }
    if (game.d === 'b') {
      game.posList[0].y -= 1
      if (game.posList[0].y < 0) {
        game.posList[0].y = 9
      }
    }

    const snake = document.createElement('div')
    snake.classList.add('absolute', 'bottom-0', 'left-0', 'h-[40px]', 'w-[40px]', 'bg-green-500', 'rounded-xs', 'border')
    snake.style.transform = `translate(${40 * game.posList[0].x}px, -${40 * game.posList[0].y}px)`

    app.innerHTML = ''
    app.appendChild(snake)

    console.log(game)
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
