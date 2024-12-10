// function solve(x, y, operator) {

//     const multiply = (x, y) => x * y;
//     const divide = (x, y) => x / y;
//     const add = (x, y) => x + y;
//     const subtract = (x, y) => x - y;

//     switch (operator) {
//       case "multiply":
//         console.log(multiply(x, y));
//         break;
//       case "divide":
//         console.log(divide(x, y));
//         break;
//       case "add":
//         console.log(add(x, y));
//         break;
//       case "subtract":
//         console.log(subtract(x, y));
//         break;
//     }
// }

function solve(x, y, operator) {

    const operations = {
        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y,
    };

    const operatorFunction = operations[operator];
    const result = operatorFunction(x, y);
    console.log(result);

    // console.log(operations[operator](x, y));
}