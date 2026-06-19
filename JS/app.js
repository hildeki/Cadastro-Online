import { Client } from "./classes.js";
import { validateName } from "./utils.js";

const client = new Client(
    "Hideki",
    "hideki@email.com"
);

console.log(client);

console.log(
    validateName("Hideki")
);

console.log(
    validateName("A")
);