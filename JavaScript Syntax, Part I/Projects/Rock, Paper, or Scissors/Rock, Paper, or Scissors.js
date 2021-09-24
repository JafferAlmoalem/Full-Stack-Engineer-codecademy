const getUserChoice = userInput =>{
userInput = userInput.toLowerCase();
if(userInput==='rock'){
return userInput;
}else if(userInput==='paper'){
return userInput;
}else if(userInput==='scissors'){
return userInput;
}else{
  return console.log('Your input is invalid!');
}
};
const getComputerChoice  = () =>{
  let num = Math.floor(Math.random() * 3);
  if(num === 0){
    return 'rock';
  }else if(num === 1){
    return 'paper';
  }else if(num === 2){
    return 'scissors';
  }
}
const determineWinner  = (userChoice,computerChoice)=>{
  // No one win 
  if(userChoice===computerChoice){
    console.log(`You: ${userChoice} VS Computer: ${computerChoice}`)
      console.log('Tie!');
      return;
  }
  if(userChoice==='rock'){
    if(computerChoice==='paper'){
      console.log(`You: ${userChoice} VS Computer: ${computerChoice}`)
      console.log('lose!');
    }else{
       console.log(`You: ${userChoice} VS Computer: ${computerChoice}`)
      console.log('win!');
    }
  }else if(userChoice==='paper'){
    if(computerChoice==='scissors'){
      console.log(`You: ${userChoice} VS Computer: ${computerChoice}`)
      console.log('lose!');
    }else{
       console.log(`You: ${userChoice} VS Computer: ${computerChoice}`)
      console.log('win!');
    }
  }else if(userChoice==='scissors'){
if(computerChoice==='rock'){
      console.log(`You: ${userChoice} VS Computer: ${computerChoice}`)
      console.log('lose!');
    }else{
       console.log(`You: ${userChoice} VS Computer: ${computerChoice}`)
      console.log('win!');
    }
  }
}
const playGame = () =>{
   const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  determineWinner(userChoice,computerChoice);
};
playGame();
