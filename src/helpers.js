
function choice(input){
    let randIdx = Math.floor(Math.random() * input.length);
    return input[randIdx]
}

export { choice };