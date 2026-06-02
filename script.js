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