const nameInput = document.querySelector("#name-input");
const nameOut = document.querySelector("#name-output");

nameInput.addEventListener("keyup",() => {
    nameOut.textContent = nameInput.value || "Anonimous";
})