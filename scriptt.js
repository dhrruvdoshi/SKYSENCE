const formBox = document.querySelector(".form-box");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

showRegister.addEventListener("click", () => {
    formBox.classList.add("active");
});

showLogin.addEventListener("click", () => {
    formBox.classList.remove("active");
});
