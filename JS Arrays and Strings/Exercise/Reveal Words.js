function solve(words, text) {

    let arr = words.split(", ");

    for (const word of arr) {
        let length = word.length;

        if (text.includes("*".repeat(length))) {
            text = text.replace("*".repeat(length), word);
        }
    }
    console.log(text);
}
solve('great, learning', 'softuni is ***** place for ******** new programming languages');