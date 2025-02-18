const users =  [
    {
        name: "Iliyas",
        password: "1234"
    },
    {
        name: "Beka",
        password: "4321"
    }
]


function authenticateUser(login, password) {
    return users.some(user => user.name === login && user.password === password);
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const loginInput = form.querySelector("input[type=text]");
    const passwordInput = form.querySelector("input[type=password]");
    const button = form.querySelector("button");

    button.addEventListener("click", () => {
        const login = loginInput.value;
        const password = passwordInput.value;

        if (authenticateUser(login, password)) {
            form.innerHTML = "<p><strong>You are authenticated</strong></p>";
        } else {
            loginInput.style.border = "2px solid red";
            passwordInput.style.border = "2px solid red";
        }
    });
});



