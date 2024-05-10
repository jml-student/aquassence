const error = document.querySelector(".error-message");
const button = document.querySelector("#button");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

button.addEventListener("click", () => {
    let passwordString = password.value;
    let confirmPasswordString = confirmPassword.value;

    if (passwordString !== confirmPasswordString) {
        error.style = "visibility: visible";
    } else {
        error.style = "visibility: hidden";
    }
})