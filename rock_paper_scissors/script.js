/* 
rules for rock paper scissors

rock beats scissors
scissors beats paper
paper beats rock
*/

const options = ['rock', 'paper', 'scissors']

let computer_move = options[Math.floor(Math.random() * options.length)]


let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');
let resetBtn = document.querySelector('.reset-btn')


// let user_score = 0;
// let computer_score = 0;
// let tie = 0;
/*
Saving the score variables in local storage (permanently) so they don't get vanished on refresh.

The `|| 0` ensures we get 0 when there is no score, so it doesn't return null.

ParseInt converts the strings to an integer since localStorage deals with strings only by default
*/




let user_score = parseInt(localStorage.getItem('user_score')) || 0;
let computer_score = parseInt(localStorage.getItem('computer_score')) || 0;
let tie = parseInt(localStorage.getItem('tie')) || 0;


let gameResult = document.querySelector('.game-results')
let gameMoves = document.querySelector('.game-move')

let gameScore = document.querySelector('.game-score')
const updateGameScore = () => {
    gameScore.innerHTML = `your score: ${user_score} : computer score: ${computer_score} tie: ${tie}`;
  }

updateGameScore();
  


let score_board = `your score: ${user_score} : computer score: ${computer_score} tie: ${tie}`

const resetScoreBoard = () =>{
    user_score = 0;
    computer_score = 0;
    tie = 0;
    updateScoreBoard()
    updateGameScore();
}


const updateScoreBoard = () => {
    score_board = `your score: ${user_score} : computer score: ${computer_score} tie: ${tie}`;
    localStorage.setItem('user_score', user_score);
    localStorage.setItem('computer_score', computer_score);
    localStorage.setItem('tie', tie);
};



const callGame = (user, usermove, compmove) => {
    if (user === 'rock' && computer_move === 'scissors' 
    || user === 'scissors' && computer_move === 'paper'
    || user === 'paper' && computer_move === 'rock'
    )
 {
    user_score ++;
    gameResult.innerHTML = `You win`
    updateScoreBoard()
    
    } else if (user === computer_move) {
    tie ++;
    gameResult.innerHTML = `Draw game`
    updateScoreBoard()
    
    }
    else {
    computer_score ++;
    gameResult.innerHTML = `You lost`
    updateScoreBoard()
    }
    gameMoves.innerHTML = `User: ${usermove} - Computer: ${compmove}`
    updateGameScore();
}

rock.addEventListener('click', () => callGame('rock', 'rock', computer_move)); // called using an anonymous function(passing a reference of the callGame function) so it dont get invoked immediately
paper.addEventListener('click', () => callGame('paper', 'paper', computer_move));
scissors.addEventListener('click', () => callGame('scissors', 'scissors', computer_move));
resetBtn.addEventListener('click', resetScoreBoard)

