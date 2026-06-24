const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultsDisplay=document.getElementById("resultsDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");

let computerScore=0;
let playerScore=0;


let choices=["rock","paper","scissors"]

function playGame(playerChoice){
    
    const computerChoice=choices[Math.floor(Math.random()*choices.length)];

   let result="";

if(playerChoice===computerChoice) {
result="tie";
}
else{
switch(playerChoice){
    case "rock":
      result= ( computerChoice==="scissors")?  "you win":"you lose";
      break;

      case "paper":
      result= ( computerChoice==="rock")?  "you win":"you lose";
      break;

      case "scissors":
      result= ( computerChoice==="paper")?  "you win":"you lose";
      break;

}
    }
    playerDisplay.textContent=`player:${playerChoice}`;
    computerDisplay.textContent=`computer:${computerChoice}`;
    resultsDisplay.textContent= result;

switch(result){
        case "you win":
            playerScore++
            playerScoreDisplay.textContent=playerScore;
            break;

             case "you lose":
            computerScore++
            computerScoreDisplay.textContent=computerScore;
            break;
    }
    
}