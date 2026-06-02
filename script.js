// Captura de elementos
const clientForm = document.getElementById("clientForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const dataList = document.getElementById("dataList");

// Quando o formulario for enviado
clientForm.addEventListener("submit", (event) => {
    
    // Impedir o comportamento padrão
    event.preventDefault();
    
    // Criar uma variavel para nome
    const name = nameInput.value;
    
    // Criar uma variavel para email
    const email = emailInput.value;

    // Exibir os dois no console
    console.log(nameInput.value);
    console.log(emailInput.value);
});