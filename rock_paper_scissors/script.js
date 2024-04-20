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

let user_score = 0;
let computer_score = 0;
let tie = 0;

let score_board = `your score: ${user_score} : computer score: ${computer_score} tie: ${tie}`



const callGame = (user) => {
    if (user === 'rock' && computer_move === 'scissors' 
    || user === 'scissors' && computer_move === 'paper'
    || user === 'paper' && computer_move === 'rock'
    )
 {
    user_score ++;
    alert(`you chose ${user} and computer chose ${computer_move}, you win \n
    ${score_board}
    `)
    } else if (user === computer_move) {
    tie ++;
    alert(`you chose ${user} and computer chose ${computer_move}, tie game \n
    ${score_board}
    `)
    }
    else {
    computer_score ++;
    alert(`you chose ${user} and computer chose ${computer_move}, you lost \n
    ${score_board}
    `)
    }
}

rock.addEventListener('click', () => callGame('rock')); // called using an anonymous function so it dont get invoked immediately
paper.addEventListener('click', () => callGame('paper'));
scissors.addEventListener('click', () => callGame('scissors'));

