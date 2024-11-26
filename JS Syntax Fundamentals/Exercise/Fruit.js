function solve(fruit, grams, price) {
    let weight = (grams / 1000).toFixed(2);
    let sum = weight * price;

    console.log(`I need $${sum.toFixed(2)} to buy ${weight} kilograms ${fruit}.`);
}

solve('orange', 900, 0.9);