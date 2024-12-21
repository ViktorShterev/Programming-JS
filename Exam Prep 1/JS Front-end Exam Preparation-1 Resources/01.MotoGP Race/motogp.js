function solve(array) {

    let n = Number(array.shift());

    let grid = {};

    for (let index = 0; index < n; index++) {
        
        let riderLine = array.shift();

        let rider = riderLine.split("|");

        const name = rider[0];
        let fuel = rider[1];
        let position = rider[2];

        // const [name, fuel, position] = riderLine.split("|");

        grid[name] = {
            fuel: Number(fuel),
            position: Number(position),
        }; 
    }
    
    let commandLine = array.shift(); 

    while (commandLine !== "Finish") {

        let command = commandLine.split(" - ");

        if (command[0] === "StopForFuel") {
            let rider = command[1];
            let minFuel = Number(command[2]);
            let changedPosition = Number(command[3]);

            if (grid[rider].fuel < minFuel) {
                grid[rider].position = changedPosition;
                console.log(
                  `${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`
                );
            } else {
                console.log(`${rider} does not need to stop for fuel!`);
            }
      
        } else if (command[0] === "Overtaking") {
            let rider1 = command[1];
            let rider2 = command[2];

            let position1 = grid[rider1].position;
            let position2 = grid[rider2].position;

            if (position1 < position2) {
                grid[rider1].position = position2;
                grid[rider2].position = position1;

                console.log(`${rider1} overtook ${rider2}!`);
            }
      
        } else if (command[0] === "EngineFail") {
            let rider = command[1];
            let laps = command[2];

            console.log(
              `${rider} is out of the race because of a technical issue, ${laps} laps before the finish.`
            );

            delete grid[rider];
        }

        commandLine = array.shift();
    }

    for (const key in grid) {
        console.log(`${key}`);
        console.log(`   Final position: ${grid[key].position}`);
    }
    
}
solve(["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]);