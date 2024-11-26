function solve(num, operator1, operator2, operator3, operator4, operator5) {

    let operators = [operator1, operator2, operator3, operator4, operator5];

    let parsedNum = Number(num);
    
    for (let index = 0; index < operators.length; index++) {
      let result = 0;

      if (operators[index] === "chop") {
        result = parsedNum / 2;
      } else if (operators[index] === "dice") {
        result = Math.sqrt(parsedNum);
      } else if (operators[index] === "spice") {
        result = parsedNum + 1;
      } else if (operators[index] === "bake") {
        result = parsedNum * 3;
      } else if (operators[index] === "fillet") {
        result = parsedNum - parsedNum * 0.2;
      }

      parsedNum = result;

      console.log(result);
    }
}

solve("32", "chop", "chop", "chop", "chop", "chop");