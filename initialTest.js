const inputText = document.querySelector("#inputText");
const code = document.querySelector("#code");
const keycode = document.querySelector("#heading");
const key = document.querySelector("#key");


document.addEventListener("keydown", (event) => {
    code.textContent = event.code;
    // keycode.textContent = event.keyCode;
    key.textContent = event.key;
})

input.addEventListener("keydown", (event) => {
    if (event.key == "Backspace") {
        // let text = inputText.innerHTML
        inputText.innerHTML = inputText.innerHTML.slice(0,-1);
    } else {
        inputText.innerHTML = inputText.innerHTML + event.key
    }

    
})