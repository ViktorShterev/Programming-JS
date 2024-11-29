function solve(currentStock, orderedStock) {

    let stock = {};

    for (let index = 0; index < currentStock.length; index += 2) {
        let product = currentStock[index];
        let quantity = currentStock[index + 1];

        stock[product] = Number(quantity);
    }

    for (let index = 0; index < orderedStock.length; index += 2) {
      let product = orderedStock[index];
      let quantity = orderedStock[index + 1];

        if (!stock.hasOwnProperty(product)) {
            stock[product] = Number(quantity);
        } else {
            stock[product] += Number(quantity);
      }
    }

    for (const product in stock) {
        console.log(`${product} -> ${stock[product]}`);
    }
}

solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],

  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);