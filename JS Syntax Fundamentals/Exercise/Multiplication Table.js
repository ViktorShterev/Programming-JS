function solve(num) {
    let result = 0;

    for (let index = 1; index <= 10; index++) {
        result = num * index;
        console.log(`${num} X ${index} = ${result}`);
    }
}
solve(5);