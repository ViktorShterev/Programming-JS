function solve(input) {
  let map = [];

  for (const line of input) {
    let direction = line.split(", ")[0];
    let plate = line.split(", ")[1];

    if (direction === "IN" && !map.includes(plate)) {
      map.push(plate);
    } else if (direction === "OUT" && map.includes(plate)){
        let index = map.indexOf(plate);
        map.splice(index, 1);
    }
  }

  if (map.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
      
      function compare(a, b) {
          return a.localeCompare(b);
      }
    map.sort(compare);

    map.forEach((element) => {
      console.log(element);
    });
  }
}

solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
