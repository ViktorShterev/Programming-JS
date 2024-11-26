function solve(array) {
    array.sort((a, b) => {
        return a.localeCompare(b);
    });

    for (let index = 0; index < array.length; index++) {
        
        console.log(`${index + 1}.${array[index]}`);
    }
}
solve(["John", "Bob", "Christina", "Ema"]);