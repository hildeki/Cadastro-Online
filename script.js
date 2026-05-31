// Captura de elementos
const clientForm = document.getElementById("clientForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const dataList = document.getElementById("dataList");

// Entrega do formulario
clientForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;

    console.log(name);
    console.log(email);
});