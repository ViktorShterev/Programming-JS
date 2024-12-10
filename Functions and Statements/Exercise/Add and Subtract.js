function solve(a, b, c) {

    let sum = (a, b) => {
        return a + b;
    }

    let subtract = (sum, c) => {
        return sum - c;
    }

    console.log(subtract(sum(a, b), c));
}