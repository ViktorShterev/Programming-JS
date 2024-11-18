function solve(...input) {

    let largestNum = 0;

    for (let index = 0; index < input.length; index++) {
        const current = input[index];
        
        if (current > largestNum) {
            largestNum = current;
        }
    }
    console.log(largestNum);
}
solve(1, 5, 65, 2, 88);


function findHighestNumber(...input1) {
    const sortedInput = input1.sort(function (a, b) {
        return b - a;
    });
    const highestNumber = sortedInput[0];
    console.log(`The largest number is ${highestNumber}.`);
}
findHighestNumber(1, 5, 65, 2, 88);