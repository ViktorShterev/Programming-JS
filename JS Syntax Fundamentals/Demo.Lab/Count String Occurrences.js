function solve(text, word) {
    let count = 0;
    let arr = text.split(" ");
    
    for (const element of arr) {
        if (element === word) {
            count++;
        }
    }
    console.log(count);
}
solve("This is a word and it also is a sentence", "is");