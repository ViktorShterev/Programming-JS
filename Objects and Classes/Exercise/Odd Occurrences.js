function solve(input) {

    let array = input.split(" ");

    let map = {};

    // let map = new Map();

    for (const word of array) {
        let newWord = word.toLowerCase();

        if (!map.hasOwnProperty(newWord)) {
            map[newWord] = 1;
        } else {
            map[newWord] += 1;
        }

        // if (!map.has(element)) {
        //     map.set(element, 1);
        // } else {
        //     let oldValue = map.get(element);
        //     let newValue = oldValue += 1;

        //     map.set(element, newValue);
        // }
    }

    let result = [];

    for (const key in map) {
        if (map[key] % 2 !== 0) {
            result.push(key);
        }
    }

    // map.forEach(value, key => {
    //     if (value % 2 !== 0) {
    //         result.push(key);
    //     }
    // });

    console.log(result.join(" "));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');