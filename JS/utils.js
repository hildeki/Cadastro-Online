export function validateName(name) {
    return name.trim().length >= 3;
}

export function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

export function findClientByEmail(clients, email) {
    return clients.find(client => client.email === email);
}

export function countClients(clients) {
    return clients.reduce(total => total + 1, 0);
}

export function createClientListItems(clients) {
    return clients.map(client => {
        const li = document.createElement("li");
        li.textContent = `${client.name} - ${client.email}`;
        return li;
    });
}