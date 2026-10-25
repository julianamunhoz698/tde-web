console.log("Rodando")

const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmarPassword = document.getElementById("confirmarPassword");
const btnCadastro = document.getElementById("btnCadastro");

btnCadastro.onclick = () => {
    console.log("cliquei");
    validate(email.value, password.value, confirmarPassword.value);
}

function validate(email, password, confirmarPassword) {
   
    if (email.trim() === "" && password === "" && confirmarPassword === "") {
        alert("Preencha os campos e-mail, senha e confirmar senha");
    }
    else if (email.trim() === "") {
        alert("Preencha o e-mail");
    }
    else if (password === "") {
        alert("preencha a senha");
    }
    else if (confirmarPassword === "") {
        alert("Preencha o campo confirmar senha");
    }
    else if(password !== confirmarPassword) {
        alert("As senhas não coincidem");
    }
    else {
        alert("Dados validados com sucesso!");
        window.location.href = "./Colecao.colecao.html";
    }
       
}
