import './style.css'

const app = document.querySelector('#app')
const snake = document.querySelector('#snake')

const game = {
  snakeCoord: {
    x: 0, // 0 - 9
    y: 0, // 0 - 9
    d: 'r', // 'l', 'r', 't', 'b'
    xBoundary: 9,
    yBoundary: 9,
  },
}


// Create div that's 100px wide, 100px long

const startGame = () => {
  game.snakeCoord.x = 0
  game.snakeCoord.y = 0
  game.snakeCoord.d = 'r'

  setInterval(function() {
    if (game.snakeCoord.d === 'r') {
      game.snakeCoord.x += 1

      if (game.snakeCoord.x > game.snakeCoord.xBoundary) {
        game.snakeCoord.x = 0
      }
    }
    // if (game.snakeCoord.d === 'l') {
    //   game.snakeCoord.x -= 1
    // }
    // if (game.snakeCoord.d === 't') {
    //   game.snakeCoord.y += 1
    // }
    // if (game.snakeCoord.d === 'b') {
    //   game.snakeCoord.y -= 1
    // }

    if (game.snakeCoord.d === 'r' || game.snakeCoord.d === 'l') {
      snake.style.transform = `translateX(${40 * game.snakeCoord.x}px)`
    } else {
      snake.style.transform = `translateY(${40 * game.snakeCoord.y}px)`
    }
    // snake.classList.add()
    // translate-x-[${40 * game.snakeCoord.x}px] translate-y-[${40 * game.snakeCoord.y}px]

    console.log(game.snakeCoord)
  }, 1000);
}

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case 37: // l
      game.snakeCoord.d = 'l'
        // alert('Left key');
    break;
    case 38: // t
      game.snakeCoord.d = 't'
        // alert('Up key');
    break;
    case 39: // r
      game.snakeCoord.d = 'r'
        // alert('Right key');
    break;
    case 40: // b
      game.snakeCoord.d = 'b'
        // alert('Down key');
    break;
  }
};

startGame()
