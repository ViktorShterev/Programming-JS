function solve() {
  let generateButton = document.querySelector("button");
  let buyButton = document.querySelectorAll("button")[1];
  let furnitureElement = document.querySelector("#furniture-list");

  generateButton.addEventListener("click", () => {
    let input = JSON.parse("furniture.json");
    for (let item of input) {
      let element = document.createElement("tr");
      element.classList.add("furniture");

      let elementTD = document.createElement("td");
      let pName = document.createElement("p");
      pName.textContent = `Name: ${item.name}`;

      let element1TD = document.createElement("td");
      let pImg = document.createElement("p");
      let img = document.createElement("img");
      img.src = item.img;

      let element2TD = document.createElement("td");
      let price = document.createElement("p");
      price.textContent = `Price: ${item.price}`;

      let element3TD = document.createElement("td");
      let decFactor = document.createElement("p");
      decFactor.textContent = `Decoration factor: ${item.decFactor}`;

      let inputType = document.createElement("input");
      inputType.setAttribute("type", "checkbox");

      element.appendChild(elementTD);
      elementTD.appendChild(pName);

      element.appendChild(element1TD);
      element1TD.appendChild(pImg);
      pImg.appendChild(img);

      element.appendChild(element2TD);
      element2TD.appendChild(price);

      element.appendChild(element3TD);
      element3TD.appendChild(decFactor);

      element.appendChild(inputType);

      furnitureElement.appendChild(element);
    }
  });

  buyButton.addEventListener("click", () => {
    let clean = document.querySelector("#exercise textarea");
    clean.value = "";
    let resultArea = document.querySelectorAll("#exercise textarea")[1];

    let resultNames = [];
    let resultPrices = [];
    let decorationFactors = [];
    let elements = document.querySelector("#furniture-list").children;
    for (let item of elements) {
      let checkBox = item.querySelector("input");
      if (checkBox.checked) {
        resultNames.push(item.querySelector("p").textContent.split(": ")[1]);
        resultPrices.push(
          +item.querySelectorAll("p")[1].textContent.split(": ")[1]
        );
        decorationFactors.push(
          +item.querySelectorAll("p")[2].textContent.split(": ")[1]
        );
      }
    }
    let finalPrice = resultPrices.reduce(add, 0);
    let avgDec = ParseFloat(
      decorationFactors.reduce(add, 0) / decorationFactors.length
    );

    resultArea.textContent += `Bought furniture: ${resultNames.join(", ")}\n`;
    resultArea.textContent += `Total price: ${finalPrice.toFixed(2)}\n`;
    resultArea.textContent += `Average decoration factor: ${avgDec}`;
  });

  function add(a, b) {
    return ParseFloat(a) + ParseFloat(b);
  }
}
