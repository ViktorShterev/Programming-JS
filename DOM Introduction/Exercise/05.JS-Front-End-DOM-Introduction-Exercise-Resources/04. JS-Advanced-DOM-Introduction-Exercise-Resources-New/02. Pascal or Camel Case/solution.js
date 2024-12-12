function solve() {
  const text = document.getElementById("text").value;

  let array = text.toLowerCase().split(" ");

  let result = '';

  const format = document.getElementById("naming-convention").value;

  if (format === "Camel Case") {
    result = array[0];

    for (let index = 1; index < array.length; index++) {
      let current = array[index];

      let word = current.split("");

      let first = word.shift().toUpperCase();

      let newWord = first + word.join("");

      result += newWord;
    }
  } else if (format === "Pascal Case") {
    
    for (let index = 0; index < array.length; index++) {
      let current = array[index];

      let word = current.split("");

      let first = word.shift().toUpperCase();

      let newWord = first + word.join("");

      result += newWord;
    }
  } else {
    result = "Error!";
  }

  document.getElementById("result").textContent = result;
}