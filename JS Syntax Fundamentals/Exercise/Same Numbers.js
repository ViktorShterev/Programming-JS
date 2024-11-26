function solve(num) {

    let numAsString = String(num);
    let sum = 0;
    let isTrue = true;

    for (let index = 0; index < numAsString.length; index++) {
        
        let current = Number(numAsString[index]);
        sum += current;

        if (index === numAsString.length - 1) {
            break;
        }
        
        if (current !== Number(numAsString[index + 1])) {
            isTrue = false;
        }
    }
    console.log(isTrue);
    console.log(sum);
}
solve(2222222);