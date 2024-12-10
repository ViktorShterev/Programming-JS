function solve(num1, num2) {

    let sum1 = 1;
    let sum2 = 1;

    for (let index = 1; index <= num1; index++) {
        sum1 *= index;              
    }

    for (let index = 1; index <= num2; index++) {
      sum2 *= index;
    }

    let result = sum1 / sum2;

    console.log(result.toFixed(2));
}
solve(6, 2)