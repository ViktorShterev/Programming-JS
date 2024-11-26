function solve(arr, rotation) {

    for (let index = 0; index < rotation; index++) {
        
        let removeFirst = arr.shift();
        arr.push(removeFirst);
    }
    console.log(arr.join(" "));
}
solve([51, 47, 32, 61, 21], 2);