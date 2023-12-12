let score = JSON.parse(localStorage.getItem('score')) ||
{
    wins: 0,
    draws: 0,
    losses: 0,
};

document.body.querySelector('.js-score').innerHTML = `Wins: ${score.wins}\tDraws: ${score.draws}\tLosses: ${score.losses}`;

var randomNumber;
let myChoice;
let computerChoice;

function getComputerChoice(randomNumber){
    let computerChoice;

    if(randomNumber * 3 <= 1){
        computerChoice = 'Rock';
    }
    else if(randomNumber * 3 <= 2 && randomNumber * 3 >= 1){
        computerChoice = 'Paper';
    }
    else{
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

function startGame(myChoice, computerChoice){
    const resultElement = document.body.querySelector('.js-result');
    const resultTitleElement = document.body.querySelector('.js-result-title')

    if(myChoice === computerChoice){
        resultTitleElement.innerHTML = 'Draw<br>';
        resultElement.innerHTML = `You: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${myChoice}<br>Computer: &nbsp;&nbsp;${computerChoice}`;

        score.draws += 1;
    }
    else{
        if( (myChoice === 'Rock' && computerChoice === 'Scissors') ||
            (myChoice === 'Paper' && computerChoice === 'Rock')    ||
            (myChoice === 'Scissors' && computerChoice === 'Paper')){
            resultTitleElement.innerHTML = 'You won!<br>';
            resultElement.innerHTML = `You: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${myChoice}<br>Computer: &nbsp;&nbsp;${computerChoice}`;

            score.wins += 1;
        }
        else{
            resultTitleElement.innerHTML = 'You loosed<br>';
            resultElement.innerHTML = `You: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${myChoice}<br>Computer: &nbsp;&nbsp;${computerChoice}`;

            score.losses += 1;
        }
        localStorage.setItem('score', JSON.stringify(score));
        console.log(localStorage.getItem('score'));
    }
}

function updateScore(){
    const scoreElement = document.body.querySelector('.js-score');
    scoreElement.innerHTML = `Wins: ${score.wins}\tDraws: ${score.draws}\tLosses: ${score.losses}`;
}

function resetScores(){
    localStorage.removeItem('score');
    score.wins = 0;
    score.draws = 0;
    score.losses = 0;
    localStorage.setItem('score', JSON.stringify(score));

    const resultElement = document.body.querySelector('.js-result').innerHTML = '';
    const resultTitleElement = document.body.querySelector('.js-result-title').innerHTML = '';
    updateScore();
}