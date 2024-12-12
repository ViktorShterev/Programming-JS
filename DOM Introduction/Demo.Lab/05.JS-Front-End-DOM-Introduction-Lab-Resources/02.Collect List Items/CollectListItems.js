function extractText() {
    const elementsFromList = document.getElementsByTagName("li");

    let result = [];

    for (const item of Array.from(elementsFromList)) {
        result.push(item.textContent);
    }

    const textArea = document.getElementById("result");

    textArea.textContent = result.join("\n");
}