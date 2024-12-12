function solve() {
  const rawText = document.getElementById("input").value;
  const output = document.getElementById("output");

  let sentences = rawText.split(".");

  sentences = sentences
    .filter(s => s.length > 0)
    .map(s => s += ".");
  
  while (sentences.length > 0) {
    let p = document.createElement("p");

    p.textContent = sentences.splice(0, 3).join("");

    output.appendChild(p);
  }
}