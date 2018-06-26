
function tailsNeverFails() {
  let tails = 0; 
    
   while (Math.random() >= 0.01) {
   tails++ 
  }
    
 console.log(`You got ${tails} tails in a row!`);
 }
 