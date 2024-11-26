function solve(num1, num2) {
    let result = 0;
    let array = [];

    for (let index = num1; index <= num2; index++) {
        result += index;
        array.push(index);
    }

    console.log(array.join(" "));
    console.log(`Sum: ${result}`);
}

solve(5, 10);