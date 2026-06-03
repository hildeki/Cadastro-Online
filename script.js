// Captura de elementos
const clientForm = document.getElementById("clientForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const dataList = document.getElementById("dataList");

// URL API
const API_URL = "https://crudcrud.com/api/0f2c5f73f7874fd5812dcdd4b0061bc1/clients";

// API dados sync
async function createClient(name, email) {

    // Requisicao de API
     await fetch(API_URL, {
        method: "POST"
});
}

// Quando o formulario for enviado
clientForm.addEventListener("submit", async (event) => {
    
    // Impedir o comportamento padrão
    event.preventDefault();
    
    // Criar uma variavel para nome
    const name = nameInput.value;
    
    // Criar uma variavel para email
    const email = emailInput.value;

    // Execucao do API
    await createClient(name, email);

    // Exibir os dois no console
    console.log(name);
    console.log(email);

    // Criar "li"
    const li = document.createElement("li");

    // Colocar os elementos de nome e email
    li.textContent = name + " - " + email;

    // Adicionar o "li" o HTML
    dataList.appendChild(li);

    // Reset do texto
    clientForm.reset();
});