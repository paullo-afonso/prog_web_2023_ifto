// condições lógicas

const usuario = prompt("digite seu usuário:");
const userpadrao = 'Paulo';
const senha = prompt('digite sua senha');
const senhapadrao = '123456';

let msg = 'Usuário não encontrado';

// se

if(usuario == userpadrao) {
    if(senha == senhapadrao) {
        msg = 'Usuário Logado!'
    }else {
        msg = 'Senha Inválida'
    }
} else {
    msg = 'Usuário Inválido'
}



alert(msg);


// if (usuario != userpadrao && senha != senhapadrao) {
//     msg = `Usuário Inválido e senha inválida!`;
//     if(usuario == userpadrao && senha == senhapadrao) {
//         msg = `Bem vindo ${usuario}!`;
//     } else {
//         msg = 'Usuário e senha inválida!';
//     }
// } else { // se não
//     msg = `Usuário Logado!`;
// }
