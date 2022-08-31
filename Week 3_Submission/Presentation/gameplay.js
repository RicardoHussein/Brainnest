let game_options = {
    Rock: "Rock", 
    Paper: "Paper",
    Scissors: "Scissors",
};

const keys = Object.keys(game_options);

function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}
  

function computerPlay()
{
        return game_options[keys[getRandomInt(3)]];
}

function playRound(playerSelection, computerSelection)
{
    if(playerSelection.toLowerCase() === "rock")
    {
        if(computerSelection === "Paper")
        {
            computerwins = computerwins + 1;
            return "You Lose! Paper beats Rock";
        }

        if(computerSelection === "Scissors")
        {
            playerwins = playerwins + 1;
            return "You Win! Rock beats Scissors";
        }

        else
        {
            return "Its a tie";
        }     
    }
    
    if(playerSelection.toLowerCase() === "paper")
    {
        if(computerSelection === "Scissors")
        {
            computerwins = computerwins + 1;
            return "You Lose! Scissors beats Paper";
        }

        if(computerSelection === "Rock")
        {
            playerwins = playerwins + 1;
            return "You Win! Paper beats Rock";
        }

        else
        {
            return "Its a tie";
        }     
    }

    if(playerSelection.toLowerCase() === "scissors")
    {
        if(computerSelection === "Rock")
        {
            computerwins = computerwins + 1;
            return "You Lose! Rock beats Scissors";
        }

        if(computerSelection === "Paper")
        {
            playerwins = playerwins + 1;
            return "You Win! Scissors beats Paper";
        }

        else
        {
            return "Its a tie";
        }     
    }
        
        return " ";
}

function game()
{
    for(let i = 0; i < 5; i++)
    {    
        computerSelection = computerPlay();
        playerSelection = prompt("Insert Rock, Paper or Scissors");
        console.log(playRound(playerSelection, computerSelection))
        console.log("Player " + playerwins + " - Computer " + computerwins)
    }

    if(playerwins > computerwins)
    {
        console.log("You WIN " + playerwins + "  - " + computerwins)
    }

    if(computerwins > playerwins)
    {
        console.log("The Winner is the Computer " + computerwins + "  - " + playerwins)
    }

    if(computerwins === playerwins)
    {
        console.log("It's a tie " + computerwins + "  - " + playerwins)
    }
}

let computerSelection;

let playerSelection;

let playerwins = 0;

let computerwins = 0;

game();

