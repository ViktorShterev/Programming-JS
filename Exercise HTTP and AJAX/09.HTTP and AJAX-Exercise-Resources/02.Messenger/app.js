function attachEvents() {

    const baseUrl = "http://localhost:3030/jsonstore/messenger";
    const inputName = document.querySelector('div input[name=author]');
    const messageInput = document.querySelector('div input[name=content]');
    const buttonSend = document.getElementById("submit");
    const buttonRefresh = document.getElementById('refresh');
    const textareaMessages = document.getElementById("messages");

    buttonSend.addEventListener("click", async () => {

        const messageFormat = {
            author: inputName.value,
            content: messageInput.value,
        };

        let isValidInput = inputName.value !== "" && messageInput.value !== "";

        if (isValidInput) {
            await fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify(messageFormat),
            });
        }
        inputName.value = "";
        messageInput.value = "";
    });

    buttonRefresh.addEventListener("click", async () => {

        const responce = await fetch(baseUrl);
        const messages = await responce.json();

        const messagesOutput = [];

        for (const messageInfo of Object.values(messages)) {
            messagesOutput.push(`${messageInfo.author}: ${messageInfo.content}`);
        }

        textareaMessages.value = messagesOutput.join("\n");
    });
}

attachEvents();