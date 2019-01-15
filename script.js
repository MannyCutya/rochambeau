let playerScore = 0;
let cpuScore = 0;
const plays = ['rock', 'paper', 'scissors'];


function playRound(playerSelection, element) {

    element.setAttribute('style', 'background-color: white');
    let computerSelection = plays[Math.floor(Math.random()*plays.length)];

    results = checkWinner(playerSelection, computerSelection);
    if (results === "Tie") {
        element.setAttribute('style', 'background-color: yellow');
        element.textContent = `Both picked ${playerSelection}! Go again!`
    } else {
        element.textContent = `Player picked ${playerSelection}  |  CPU picked ${computerSelection}`
    }
    scorePara.textContent =  `Player: ${playerScore} | CPU: ${cpuScore}`

    if (playerScore === 5 || cpuScore === 5) {
        if (results === "Player wins!") {
            element.setAttribute('style', 'color: white; background-color: green');
        } else {
            element.setAttribute('style', 'color: white; background-color: red');
        }
        element.textContent = results;
        playerScore = 0;
        cpuScore = 0;
    } 
}


function checkWinner(choice1, choice2) {

    choice1 = plays.indexOf(choice1);
    choice2 = plays.indexOf(choice2);

    if (choice1 === choice2) {
        return "Tie";
    }
    if (choice1 === plays.length -1 && choice2 == 0) {
        cpuScore++;
        return "CPU wins!";
    }
    if (choice2 === plays.length -1 && choice1 == 0) {
        playerScore++;
        return "Player wins!";
    }
    if (choice1 > choice2) {
        playerScore++;
        return "Player wins!"
    } else {
        cpuScore++;
        return "CPU wins!";
    }
}

// DOM
const wrapper = document.getElementById('wrapper');
const bod = document.querySelector('body');
const div = document.createElement('div')
const para = document.createElement('p');
const scorePara = document.createElement('p');

div.classList.add('results');
div.appendChild(para);
div.appendChild(scorePara);
bod.appendChild(div);

wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) {
        return;
    } else { playRound(event.target.id, para); }
})
