function countOccurences(text, word) {
    const arr = text.split(" ").filter(function (element) {
        return element === word;
    })
    console.log(arr.length);
}

countOccurences("is a bad is", "is");