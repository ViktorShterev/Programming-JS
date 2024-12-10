function solve(first, second) {

    let arr = [];
    let start = Math.min(first.charCodeAt(), second.charCodeAt());
    let end = Math.max(first.charCodeAt(), second.charCodeAt());


    for (let index = start + 1; index < end; index++) {
        
        const currentChar = String.fromCharCode(index);
        arr.push(currentChar);
    }

    console.log(arr.join(" ", arr));
}
solve('a', 'd');