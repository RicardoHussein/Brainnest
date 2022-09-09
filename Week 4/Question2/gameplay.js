let game_options = {
    Rock: "Rock", 
    Paper: "Paper",
    Scissors: "Scissors",
};

const keys = Object.keys(game_options);
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const output = document.getElementById("results");
output.append('\r\n');
output.textContent += '*****Results*****'
output.append('\r\n');
//output.append('*****Results*****');

rockButton.addEventListener('click',() =>{
    playerSelection = "rock";
    game();
});

paperButton.addEventListener('click',() =>{
    playerSelection = "paper";
    game();
});

scissorsButton.addEventListener('click',() =>{
    playerSelection = "scissors";
    game();
});

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
   /**  for(let i = 0; i < 5; i++)
    {    
        computerSelection = computerPlay();
        //playerSelection = prompt("Insert Rock, Paper or Scissors");
        if(playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors")
        {
            console.log(playRound(playerSelection, computerSelection))
            console.log("Player " + playerwins + " - Computer " + computerwins)
        }

        else
        {
            alert("Your input is incorrect. Please insert Rock, Paper or Scissors")
            i--;
        }
    }*/

        computerSelection = computerPlay();
        //playerSelection = prompt("Insert Rock, Paper or Scissors");
        if(playerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "scissors")
        {
            /**console.log(playRound(playerSelection, computerSelection))
            console.log("Player " + playerwins + " - Computer " + computerwins)**/
            output.append('\r\n');
            output.textContent += playRound(playerSelection, computerSelection);
            output.textContent += '\r\n';
            output.textContent += "Player " + playerwins + " - Computer " + computerwins;
            output.textContent += '\r\n';
        }

        else
        {
            alert("Your input is incorrect. Please insert Rock, Paper or Scissors")
        }

    /**if(playerwins > computerwins)
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
    }**/

    if(playerwins === 5)
    {
        output.textContent += '\r\n'
        output.textContent += "You WIN the Series " + playerwins + "  - " + computerwins
        output.textContent += '\r\n'
        playerwins = 0;
        computerwins = 0;
    }

    if(computerwins === 5)
    {
        output.textContent += '\r\n'
        output.textContent += "The Winner of the Series is the Computer " + computerwins + "  - " + playerwins
        output.textContent += '\r\n'
        playerwins = 0;
        computerwins = 0;
    }
}

let computerSelection;

let playerSelection = '';

let playerwins = 0;

let computerwins = 0;



