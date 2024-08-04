
function getComputerChoice() {
    let a = Math.floor(Math.random()*3)+1;
    if (a==1) {
        return "rock";
    }
    else if (a==2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let b = prompt("What do you select? (rock, paper, scissors): ")
    if (b=="rock" || b=="paper" || b=="scissors") {
        return b
    }
    else {
        console.log('nah')
        return null;
    }
}
// logic
function playRound(humanChoice, computerChoice) {
    let choice = humanChoice.toLowerCase()

    if (choice === computerChoice) {
        return 3;
    }
    else if ((choice === "rock" && computerChoice === "scissors") || (choice === "scissors" && computerChoice === "paper") 
        || (choice === "paper" && computerChoice === "rock")) {
        return 1;
    } 
    else {
        return 2;
    }
}

function playGame() {


    let humanScore = 0;
    let computerScore = 0;
    
    let gamelength = 5;
    while (gamelength > 0) {
        let choice = getComputerChoice();
        let choice2 = getHumanChoice();
        if (!choice2) continue;
        let getresult = playRound(choice2, choice);
        if (getresult === 1) {
            humanScore += 1;
            console.log("You win this round")
        } else if (getresult === 2) {
            computerScore += 1;
            console.log("You lose this round")
        } else {
            console.log("Tie")
        }
        gamelength -= 1;
    } 

    if (humanScore < computerScore) {
        return "computer wins";
    } else {
        return "human wins";
    }
    

}


// let choice = getComputerChoice();


// let choice2 = getHumanChoice();



let getfinalresult = playGame()


console.log(getfinalresult);



