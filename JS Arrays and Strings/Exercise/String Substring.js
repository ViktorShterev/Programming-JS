function solve(word, text) {

    let newWord = word.toLowerCase();
    let textArray = text.toLowerCase().split(" ");

    for (const words of textArray) {
        
        if (words === newWord) {
           return console.log(word);
        }
    }
    return console.log(`${word} not found!`);
}
solve('javascript', 'JavaScript is the best programming language');