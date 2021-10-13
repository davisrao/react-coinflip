function choice(input) {
  let randIdx = Math.floor(Math.random() * input.length);
  return input[randIdx];
}

function getFlippedResult() {
  const coins = ["heads", "tails"];
  return choice(coins);
}


// function updateStats(){
//     let headCount = 0;
//     let tailCoint = 0;
//     let totalCount = 0;
// }

export { getFlippedResult };
