function solve(arr) {
    const addressBook = {};

    for (const entries of arr) {
        const [key, value] = entries.split(":");
        addressBook[key] = value;
    }

    for (const key of Object.keys(addressBook).sort()) {
        console.log(`${key} -> ${addressBook[key]}`);
    }
}

solve(["Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",]);