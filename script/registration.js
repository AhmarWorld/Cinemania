let regEmailInp = document.querySelector(`#exampleInputEmail1`)
let regNickInp = document.querySelector(`#exampleInputNickl1`)
let regPassInp = document.querySelector(`#exampleInputPassword1`)
let sendCode = document.querySelector("#sendCode");
let code_input = document.querySelector("#code");
let regBtn = document.querySelector(`#regBtn`)
let random = Math.floor(Math.random() * 9000) + 1000;

sendCode.addEventListener("click", async () => {
    const templateParams = {
        from_name: "Ahmar World",
        to_email: regEmailInp.value,
        content: random,
    };
    emailjs.send("Ahmar_World", "template_06xep8a", templateParams).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
            console.log("FAILED...", error);
        }
    );
});

regBtn.addEventListener("click", () => {
    const enteredCode = parseInt(code_input.value);
    const first_name = regNickInp.value.trim();
    const last_name = regPassInp.value.trim();

    if (first_name === "" || last_name === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    makeQuery(`user/create`, `POST`, {
        firstName: regNickInp.value,
        lastName: regPassInp.value,
        email: regEmailInp.value,
    });

    if (enteredCode === random) {
        location.href = "../authorization.html";
        alert("Suda!");
    }

});