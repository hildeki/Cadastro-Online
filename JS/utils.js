export function validateName(name) {
    return name.trim().length >= 3;
}

export function validateEmail(email) {
    return email.includes("@");
}