let playerScore = 0;
let cpuScore = 0;
const plays = ['rock', 'paper', 'scissors'];

function playRound(playerSelection, element) {

    console.log(element);
    let computerSelection = plays[Math.floor(Math.random()*plays.length)];

    // console.log(`player picked ${playerSelection}`);
    // console.log(`cpu picked ${computerSelection}`);

    // console.log(checkWinner(playerSelection, computerSelection));

    checkWinner(playerSelection, computerSelection);
    element.textContent = `Player picked ${playerSelection}  |  CPU picked ${computerSelection}`
    scorePara.textContent =  `Player: ${playerScore} | CPU: ${cpuScore}`

    if (playerScore === 5) {
        console.log('Player wins!')
        element.textContent = "Player wins!";
        playerScore = 0;
        cpuScore = 0;
    } else if (cpuScore === 5) { 
        console.log('CPU wins!') 
        element.textContent = "CPU wins!";
        playerScore = 0;
        cpuScore = 0;
    }
}

function checkWinner(choice1, choice2) {

    choice1 = plays.indexOf(choice1);
    choice2 = plays.indexOf(choice2);

    // console.log(`choice1 is ${choice1}`);
    // console.log(`choice2 is ${choice2}`);

    if (choice1 === choice2) {
        return "Tie";
    }
    if (choice1 === plays.length -1 && choice2 == 0) {
        cpuScore++;
        return "CPU wins";
    }
    if (choice2 === plays.length -1 && choice1 == 0) {
        playerScore++;
        return "Player wins";
    }
    if (choice1 > choice2) {
        playerScore++;
        return "Player wins"
    } else {
        cpuScore++;
        return "CPU wins";
    }


}

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

    // console.dir(event.target.id);
})
