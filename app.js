//CODE GRAVEYARD

// game will start as soon as it loads

// moving main character buttons - left for the left direction and right for the right direction.

// time will start as soon as the game starts


const player = document.getElementById('player');
const startingMinutes = .25;
const timeDone = .00;
const countdownElement = document.getElementById('countdown');
const startButton = document.getElementById('start');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const maxMisses = 3;
let missedCount = 0;
let time = startingMinutes * 80;
let playerPosition = 175;
let collectCount = 0;
let score = 0;
const speed = 5;
// //functions--\


// game clock -- needs work
 function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
   seconds = seconds < 1 ? '0' + seconds : seconds
  countdownElement.innerHTML = `${minutes}: ${seconds}`;
   time--;
   time = time < 0 ? 0 : time
 }

//player actions
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && playerPosition > 115) {
        playerPosition -= 15;
    } else if (e.key === 'ArrowRight' && playerPosition < 850) {
        playerPosition += 15;
    }
    player.style.left = playerPosition + 'px';
});

// making my blocks -- and making them fall
function createFallingBlocks() {

    let objectPositon = 0;
    const object = document.createElement('div');
    object.classList.add('falling-blocks');
    object.style.left = Math.random() * 370 + 'px';
    gameContainer.appendChild(object);

    const objectInterval = setInterval(() => {
        objectPositon += 5
        object.style.top = objectPositon + 'px';


        const playerRect = player.getBoundingClientRect()
        const objectRect = object.getBoundingClientRect()



        if (objectRect.bottom >= playerRect.top && objectRect.left <= playerRect.right && objectRect.right >= playerRect.left

        ) {
            score++;
            scoreElement.textContent = `Score: ${score}`
            object.remove();
            clearInterval(objectInterval);

        }
    }, 20);

    if (objectPositon > 600) {
        missedCount++;
        object.remove();
        clearInterval(objectInterval);
    }
}
// // game over !
// if (setTimeout <= 0 ){
//     gameOver();
// }

if (missedCount>=maxMisses) {
    gameOver();
}

function gameOver() {
    alert('WOMP WOMP! TRY AGAIN!')
    Window.location.reload()
};



createFallingBlocks();





// time 
setInterval(updateCountdown, 1000);
setInterval(createFallingBlocks, 1500);

// setTimeout(() => {
//     console.log ('WOMP WOMP! TRY AGAIN!');

// },1500);