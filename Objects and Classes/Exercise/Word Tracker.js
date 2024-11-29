function solve(input) {

    let keyWords = input.shift();

    let keys = keyWords.split(" ");

    let list = {};

    for (const word of keys) {
        list[word] = 0;
    }

    for (const words of input) {
        
        if (list.hasOwnProperty(words)) {
            list[words]++;
        }
    }

    const sorted = Object.fromEntries(
        Object.entries(list).sort(([, a], [, b]) => b - a)
    );

    for (const key in sorted) {
        console.log(key + " - " + sorted[key]);
    };
}
solve([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);