function solve(num) {

    let countPercentage = "%".repeat(num / 10);
    let countDots = ".".repeat(10 - (num / 10));

    if (num < 100) {
        console.log(`${num}% [${countPercentage}${countDots}]`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
    }
}
solve(100)