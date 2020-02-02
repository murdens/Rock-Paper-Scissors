function game(){
  
    let playerScore = 0
    let computerScore = 0
    let rounds = 0
    
      while(rounds <5){    
      let playerSelection = prompt("Rock, Paper or Scissors?")
      const computerSelection = computerPlay()
          
          function computerPlay() {
            const turn = ['rock', 'paper', 'scissors', 'rock'];
            return turn[(Math.random() * turn.length) | 0];
          }

          function playRound(playerSelection, computerSelection){
            playerSelection = playerSelection.toLowerCase();
            if (playerSelection === computerSelection ){
            return [`Tie!! ${playerSelection} and ${computerSelection}`] 
            } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock' ) ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
            ){
            playerScore ++
            return [`You win! ${playerSelection} beats ${computerSelection}`]
            } else {
            computerScore ++  
            return [`You lose! ${computerSelection} beats ${playerSelection}`]
            }
          }
      rounds ++
      console.log(playRound(playerSelection, computerSelection))
      console.log(`Player: ${playerScore}`)
      console.log(`Computer: ${computerScore}`)
      console.log(`Round: ${rounds}`)
      }
}


document.addEventListener('click', game )