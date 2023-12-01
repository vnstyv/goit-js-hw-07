
    const textInput = document.getElementById("name-input");
    const textOutput = document.getElementById("name-output");

    textInput.addEventListener("input", event => {
        const inputValue = textInput.value.trim();

        if (inputValue === "") {
            textOutput.textContent = "Anonymous";
        } else {
            textOutput.textContent = inputValue;
        }
    });
