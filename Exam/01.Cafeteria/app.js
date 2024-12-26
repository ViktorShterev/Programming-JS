function solve(input) {

    const people = input.shift();

    const baristas = {};

    for (let index = 0; index < people; index++) {
        
        const line = input.shift();

        const [name, shift, coffies] = line.split(" ");

        baristas[name] = {
            shift,
            coffies,
        };     
    }

    let command = input.shift();

    while (command !== "Closed") {
        let commandName = command.split(" / ")[0];
        let name = command.split(" / ")[1];

        let coffeeArr = baristas[name].coffies.split(",");

        switch (commandName) {
            case "Prepare":
                let shift = command.split(" / ")[2];
                let coffee = command.split(" / ")[3];

                if (baristas[name].shift === shift && coffeeArr.includes(coffee)) {
                    console.log(
                      `${name} has prepared a ${coffee} for you!`
                    );
                } else {
                    console.log(
                      `${name} is not available to prepare a ${coffee}.`
                    );
                }
                break;
            case "Change Shift":
                let newShift = command.split(" / ")[2];

                baristas[name].shift = newShift;

                console.log(
                  `${name} has updated his shift to: ${newShift}`
                );
                break;
            case "Learn":
                let newCoffee = command.split(" / ")[2];

                if (coffeeArr.includes(newCoffee)) {
                    console.log(
                      `${name} knows how to make ${newCoffee}.`
                    );
                } else {
                    coffeeArr.push(newCoffee);
                    baristas[name].coffies = coffeeArr.toString();

                    console.log(
                      `${name} has learned a new coffee type: ${newCoffee}.`
                    );
                }
                break;
        }
        command = input.shift();
    }

    for (const name in baristas) {
        console.log(`Barista: ${name}, Shift: ${baristas[name].shift}, Drinks: ${baristas[name].coffies.split(",").join(", ")}`);
    }

}

solve([
  "3",
  "Alice day Espresso,Cappuccino",
  "Bob night Latte,Mocha",
  "Carol day Americano,Mocha",
  "Prepare / Alice / day / Espresso",
  "Change Shift / Bob / night",
  "Learn / Carol / Latte",
  "Learn / Bob / Latte",
  "Prepare / Bob / night / Latte",
  "Closed",
]);