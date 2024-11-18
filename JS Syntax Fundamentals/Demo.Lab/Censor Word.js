function censore(text, word) {
    const wordCountCensor = "*".repeat(word.length);

    while (text.includes(word)) {
        text = text.replace(word, wordCountCensor);
    }
    console.log(text);
}

censore("A small sentence with some small words and small symbols.", "small");