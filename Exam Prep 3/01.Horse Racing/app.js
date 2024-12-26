function solve(input) {

    const horses = input.shift();

    let horsesArr = horses.split("|");

    let command = input.shift();

    while (command !== "Finish") {

        let commandName = command.split(" ")[0];

        switch (commandName) {
            case "Retake":
                let overtaking = command.split(" ")[1];
                let overtaken = command.split(" ")[2];

                let index1 = horsesArr.indexOf(overtaking);
                let index2 = horsesArr.indexOf(overtaken);

                if (index1 < index2) {
                    horsesArr.splice(index2, 1);
                    horsesArr.splice(index1, 0, overtaken);

                    console.log(`${overtaking} retakes ${overtaken}.`);
                }
                break;
            case "Trouble":
                let dropping = command.split(" ")[1];
                let index = horsesArr.indexOf(dropping);

                if (index > 0) {
                    horsesArr.splice(index, 1);
                    horsesArr.splice(index - 1, 0, dropping);

                    console.log(
                      `Trouble for ${dropping} - drops one position.`
                    );
                }
                break;
            case "Rage":
                let raging = command.split(" ")[1];
                let indexCurrent = horsesArr.indexOf(raging);

                if (indexCurrent < horsesArr.length - 1) {
                    horsesArr.splice(indexCurrent, 1);

                    if (horsesArr.length - indexCurrent >= 2) {
                        horsesArr.splice(indexCurrent + 2, 0, raging);
                    } else {
                        horsesArr.splice(indexCurrent + 1, 0, raging);
                    }
                }
                console.log(`${raging} rages 2 positions ahead.`);
                break;
            case "Miracle":
                let last = horsesArr.shift();
                horsesArr.push(last);

                console.log(`What a miracle - ${last} becomes first.`);

                break;
        }
        command = input.shift();
    }

    console.log(horsesArr.join("->"));

    let winner = horsesArr[horsesArr.length - 1];
    console.log(`The winner is: ${winner}`);
}

solve([
  "Fancy|Lilly",
  "Retake Lilly Fancy",
  "Trouble Lilly",
  "Trouble Lilly",
  "Finish",
  "Rage Lilly",
]);