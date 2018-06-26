
function tailsNeverFails() {
  let tails = 0; 
    
   while (Math.random() >= 0.01) {
   tails++ 
  }
    
 console.log(`You got ${tails} tails in a row!`);
 }
  
 // for (let t = 0; t <= 100; t++) {
 //   tailsNeverFails();
 // }
 
//  function printBadges(names) {
//   console.log(`${names}`)
//   console.log(`${names}`)
 //  console.log(`${names}`)
 //  'Welcome names[3]! You are employee #1. '
 //}