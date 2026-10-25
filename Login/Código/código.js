console.log("JS Rodando")

const emailCred = "adimin@gmail.com"
const passwordCred = "12345@"

const inptEmail = document.getElementById("inptEmail");
const inptPassword = document.getElementById("inptPassword");
const btnLogin = document.getElementById("btnLogin");

btnLogin.onclick = () => {
    console.log("cliquei");
    validate(inptEmail.value, inptPassword.value);
}

function validate(email, password) {
   
    if (email.trim() === "" && password === "") {
        alert("Preencha os campos e-mail e senha");
    }
    else if (email.trim() === "") {
        alert("Preencha o e-mail");

    }
    else if (password === "") {
        alert("preencha a senha");
    }
    else if (email !== emailCred && password !== passwordCred) {
        alert("e-mail e senha inválidos! Tente novamente");
    }
    else if (email !== emailCred) {
        alert("E-mail inválido! Tente novamente");
    }
    else if (password !== passwordCred) {
        alert("Senha inválida! Tente novamente");
    }
    else if (email === emailCred && password === passwordCred) {
        alert("Logado");
        windown.location.href = "./Colecao.colecao.html";
    }
}