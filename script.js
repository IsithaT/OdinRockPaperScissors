function computerPlay() {
    // const options = ["rock", "paper", "scissors"];
    var i = Math.floor((Math.random() * 3) + 1);
    console.log(i);
    return options[i];
}

function playerSelect(params) {
    var input = prompt("enter rock, paper, or scissors")
    input = input.toLowerCase();
    return input;
}

function playRound(playerSelection, computerSelection) {
    var playerwon;
    if(playerSelection == computerSelection){
        console.log("its a tie!")
        return 2; // return 2 if tie

    } 
    else{
        if((playerSelection == "rock" && computerSelection == "scissors") | (playerSelection == "paper" && computerSelection == "rock") | (playerSelection == "scissors" && computerSelection == "paper")) {
            return 1; // return 1 if player won
        }

        else{
            return 0; // return 0 if computer won
        }
    }
}