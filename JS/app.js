import { Client } from "./classes.js";
import {
    validateName,
    validateEmail,
    findClientByEmail,
    countClients,
    createClientListItems
} from "./utils.js";

const clientForm = document.getElementById("clientForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const dataList = document.getElementById("dataList");
const message = document.getElementById("message");
const totalClients = document.getElementById("totalClients");

const API_URL = "https://crudcrud.com/api/ed224300a2b24240b8efb7660d1c1082";

const clients = [];

async function createClientOnApi(client) {
    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: client.name,
            email: client.email
        })
    });
}

function showMessage(text, type) {
    message.textContent = text;
    message.className = type;
}

function renderClients() {
    dataList.innerHTML = "";

    const listItems = createClientListItems(clients);

    listItems.forEach(item => {
        dataList.appendChild(item);
    });

    totalClients.textContent = countClients(clients);
}

clientForm.addEventListener("submit", async event => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!validateName(name)) {
        showMessage("O nome precisa ter pelo menos 3 caracteres.", "error");
        return;
    }

    if (!validateEmail(email)) {
        showMessage("Digite um email válido.", "error");
        return;
    }

    const clientAlreadyExists = findClientByEmail(clients, email);

    if (clientAlreadyExists) {
        showMessage("Este email já foi cadastrado.", "error");
        return;
    }

    const newClient = new Client(name, email);

    try {
        await createClientOnApi(newClient);

        clients.push(newClient);

        renderClients();

        showMessage("Usuário cadastrado com sucesso!", "success");

        console.log("Lista de clientes:", clients);
        console.log("Nomes cadastrados:", clients.map(client => client.name));
        console.log("Cliente encontrado:", findClientByEmail(clients, email));
        console.log("Total de clientes:", countClients(clients));

        clientForm.reset();
    } catch (error) {
        showMessage("Erro ao cadastrar usuário na API.", "error");
        console.error(error);
    }
});