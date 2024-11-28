function solve(arr) {

    const meetingsList = {};

    for (const entry of arr) {
        const [key, value] = entry.split(" ");

        if (meetingsList.hasOwnProperty(key)) {
            console.log(`Conflict on ${key}!`);
        } else {
            meetingsList[key] = value;
            console.log(`Scheduled for ${key}`);
        }
    }

    for (const key in meetingsList) {
        console.log(`${key} -> ${meetingsList[key]}`);
    }
}

solve(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);