function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    var i = randomIntFromInterval(0, 2);
    return options[i];
}

function playerSelect() {
    var input = prompt("enter rock, paper, or scissors");
    input = input.toLowerCase();
    return input;
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection == computerSelection){
        return 2; // return 2 if tie
    } 

    else{
        if((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
            return 1; // return 1 if player won
        }

        else{
            return 0; // return 0 if computer won
        }
    }
}


function game() {
    var rounds = 0;
    var playerscore = 0;
    var computerscore = 0;

    while(rounds <= 5){
        var playerselection = playerSelect();
        var computerselection = computerPlay();

        var result = playRound(playerselection, computerselection);

        if (result == 2){        
            console.log("its a tie!");
        }

        if (result == 1){     
            console.log(`player wins ${playerselection} beats ${computerselection}`);
            rounds += 1;
            playerscore += 1;
        }

        if (result == 0){        
            const output = `computer wins, ${computerselection} beats ${playerselection}`;
            console.log(output);
            rounds += 1;
            computerscore += 1;
        }

    }
    console.log(" ")
    console.log(`player got ${playerscore} points and computer got ${computerscore} points`)

}

game();