const initialUI = document.querySelector('.start_menu');
const start_btn = document.querySelector('.start_btn');
const quitBtn = document.querySelector('.quit_btn');
const canvas = document.querySelector('#c');
canvas.height = 500;
canvas.width = 300;
const ctx = canvas.getContext('2d');


const gameUI = document.querySelector('.game_ui')

start_btn.addEventListener('click', startGame)
quitBtn.addEventListener('click', endGame)


gameArea()
function startGame() {
    initialUI.classList.toggle('hidden');
    gameUI.classList.toggle('hidden')


    
}
function fig1(){
    ctx.fillRect(30, 0, 120, 30);
    ctx.fillStyle = 'red';

}

function fig2() {
    ctx.fillRect(30, 0, 60, 60);
    
}

function fig3() {
    ctx.beginPath();
    ctx.moveTo(30, 30)
    ctx.lineTo(60, 30);
    ctx.lineTo(60,0);
    ctx.lineTo(90, 0)
    ctx.lineTo(90, 30);
    ctx.lineTo(120, 30);
    ctx.lineTo(120, 60);
    ctx.lineTo(30, 60);
    ctx.lineTo(30, 30);





    ctx.stroke()

    
}

function endGame(params) {
    initialUI.classList.toggle('hidden');
    gameUI.classList.toggle('hidden')

    
}




function gameArea() {
    fig3()

}