function solve(num1, num2, operator) {
    let a = num1;
    let b = num2;
    let result;

    switch(operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        case "%":
            result = a % b;
            break;
        case "**":
            result = a ** b;
            break;
    }

    console.log(result);
}

solve(3, 5.5, "*");