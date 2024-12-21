function solve(input) {

    const numAstro = Number(input.shift());

    const astronauts = {};

    for (let index = 0; index < numAstro; index++) {
        const line = input.shift();

        const [name, oxygen, energy] = line.split(" ");

        astronauts[name] = {
            oxygen: Number(oxygen),
            energy: Number(energy),
        };
    }

    let command = input.shift();

    while (command !== "End") {
        
        const nameCommand = command.split(" - ")[0];
        const name = command.split(" - ")[1];

        switch (nameCommand) {
            case "Explore": {
                const energyNeeded = Number(command.split(" - ")[2]);

                if (astronauts[name].energy > energyNeeded) {
                    astronauts[name].energy = astronauts[name].energy - energyNeeded;
                    console.log(
                        `${name} has successfully explored a new area and now has ${astronauts[name].energy} energy!`
                    );
                } else {
                    console.log(
                        `${name} does not have enough energy to explore!`
                    );
                }
            }
                break;
        
            case "Refuel": {
                let amount = Number(command.split(" - ")[2]);

                astronauts[name].energy = astronauts[name].energy + amount;

                if (astronauts[name].energy > 200) {
                    amount = amount - (astronauts[name].energy - 200);
                    astronauts[name].energy = 200;
                }

                console.log(
                    `${name} refueled their energy by ${amount}!`
                );
            }
                break;
            
            case "Breathe": {
                let amount = Number(command.split(" - ")[2]);

                astronauts[name].oxygen = astronauts[name].oxygen + amount;

                if (astronauts[name].oxygen > 100) {
                    amount = amount - (astronauts[name].oxygen - 100);
                    astronauts[name].oxygen = 100;
                }

                console.log(
                    `${name} took a breath and recovered ${amount} oxygen!`
                );
            }
                break;
        
        }
        command = input.shift();
    }

    for (const name in astronauts) {
        
        console.log(
          `Astronaut: ${name}, Oxygen: ${astronauts[name].oxygen}, Energy: ${astronauts[name].energy}`
        );
    }
}

solve(["4",
"Alice 60 100",
"Bob 40 80",
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'End']);