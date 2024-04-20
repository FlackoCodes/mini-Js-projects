// rules for rock paper scissors
/* 
rock beats scissors
scissors beats paper
paper beats rock
*/

const options = ['rock', 'paper', 'scissors']

let computer_move = options[Math.floor(Math.random() * options.length)]


let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');




const callGame = (user) =>{
    if (user === 'rock' && computer_move === 'scissors' 
    || user === 'scissors' && computer_move === 'paper'
    || user === 'paper' && computer_move === 'rock'
) {
        alert(`you chose ${user} and computer chose ${computer_move}, you win`)
    } else if (user === computer_move) {
        alert(`you chose ${user} and computer chose ${computer_move}, tie game`)
    }
    else {
        alert(`you chose ${user} and computer chose ${computer_move}, you lost`)
    }
}

rock.addEventListener('click', () => callGame('rock'));
paper.addEventListener('click', () => callGame('paper'));
scissors.addEventListener('click', () => callGame('scissors'));

