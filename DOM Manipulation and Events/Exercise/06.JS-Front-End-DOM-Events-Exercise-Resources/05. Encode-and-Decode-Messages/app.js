function encodeAndDecodeMessages() {
    const input = document.querySelectorAll("main div textarea")[0];
    const output = document.querySelectorAll("main div textarea")[1];

    const buttons = Array.from(document.querySelectorAll("button"));

    buttons.forEach(btn => {
        btn.addEventListener("click", decode);
    });

    function decode(e) {
        let btn = e.target;

        if (btn.textContent === "Encode and send it") {
            let message = input.value;

            let coded = ""

            let code = message.split("");

            for (let symbol of code) {
                let ascii = symbol.charCodeAt() + 1;
                symbol = String.fromCharCode(ascii);

                coded += symbol;
            }

            input.value = "";

            output.value = coded;
        
        } else if (btn.textContent === "Decode and read it") {
            let message = output.value;

            let coded = ""

            let code = message.split("");

            for (let symbol of code) {
                let ascii = symbol.charCodeAt() - 1;
                symbol = String.fromCharCode(ascii);
                coded += symbol;
            }
            output.value = coded;
        }
    }
}