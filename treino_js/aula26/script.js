let h3 = document.getElementsByTagName('h3')[0];

let msg_img = h3.getElementsByTagName('img')[0];

let msg_text = h3.getElementsByTagName('div')[0];

let login = document.getElementById('login');
let senha = document.querySelector('input[name="senha"]');

//alterar conteúdo de um elemento:
//h3.textContent = 'Juca';

//alterar o html de um elemento:
//h3.innerHTML = "<img src='success.png'/> juca";

console.log(h3.textContent);

//let msg = document.querySelector()

function alertSucesso(text) {
    msg_img.src = 'success.png';
    msg_text.textContent = text;
    h3.style.display = 'flex';
    h3.classList.remove('error');
    // h3.style.color = '';
    // h3.style.backgroundColor = '';
    // h3.style.borderColor = '';
}
function alertError(text) {
    msg_img.src = 'error.png';
    msg_text.textContent = text;
    h3.style.display = 'flex';
    h3.classList.add('error');
    // h3.style.color = 'red';
    // h3.style.backgroundColor = 'pink';
    // h3.style.borderColor = 'red';
}

function bloquearLogin(bloquear = true) {
    login.disabled = bloquear;
    senha.disabled = bloquear;
}

function logar() {
    let login = document.getElementById('login');
    let senha = document.querySelector('input[name="senha"]');
    login.style.borderColor = '';
    senha.style.borderColor = '';
    if(login.value == "") {
        login.style.borderColor = 'red';
    }
    if(senha.value == "") {
        senha.style.borderColor = 'red';
    }
    if(login.value == 'paulo' && senha.value == '123456') {
        alertSucesso('Bem vindo Paulo!');
    }else{
        alertError('Login Inválido');
}

}
