function solve(object) {

    for (const entry of Object.entries(object)) {
        
        const [key, value] = entry;

        console.log(`${key} -> ${value}`);
    }
}

solve({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});