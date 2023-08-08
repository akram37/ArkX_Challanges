function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
  }
  let array=['Rock','Scissors','Paper'];
  let userChoice="Paper";
  let computerChoice=get_random(array);
  function play(uC,cC){
    let result;
    if(!uC){
        return "user should enter a value";
  }
  else{
   switch(uC){
    case cC : result="it's a tie"
      break;
    case "Rock" : 
      cC==="Scissors" ? result= "User Wins" :  result= "Computer Wins";
      break;
      case "Paper" : 
      cC==="Scissors" ? result= "Computer Wins" :  result= "User Wins";
      break;
      case "Scissors" : 
      cC==="Paper" ? result= "User Wins" :  result= "Computer Wins";
      break;
   }
  }
  return result;
  }
  
  console.log(`User choice : ${userChoice} ---- Computer choice : ${computerChoice}`);
  console.log(play(userChoice,computerChoice));