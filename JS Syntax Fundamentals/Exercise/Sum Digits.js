function solve(num) {
    let sum = 0;

    let numAsString = num.toString();

    for (let index = 0; index < numAsString.length; index++) {
        let current = Number(numAsString[index]);
        sum += current;
    }

    console.log(sum);
}
solve(245678);