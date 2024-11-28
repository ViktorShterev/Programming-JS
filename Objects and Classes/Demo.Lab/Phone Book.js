function solve(arr) {
  const phoneBook = {};

  for (const entry of arr) {
    const [key, value] = entry.split(" ");

    phoneBook[key] = value;
  }

  for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

solve(["Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",]);
