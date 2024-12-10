function solve(num) {

    let numAsString = num.toString();

    let nums = numAsString.split("");

    let sumEven = 0;
    let sumOdd = 0;

    for (let num of nums) {
        if (num % 2 === 0) {
            sumEven += Number(num);
        } else {
            sumOdd += Number(num);
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
solve(1000435);