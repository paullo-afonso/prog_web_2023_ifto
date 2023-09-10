// Crie um sistema de senhas para nosso consultório,
// ele deve ter três opções, Normal, Preferencial
// e Retorno. Cada vez que o usuário chamar a função
// correspondente ele deve adicionar um novo número 
// a senha criada
// utilize seu conhecimento de clouseres para
// resolver o problema.
//

function senha(prefixo) {
    let cont = 0;
    let pre = prefixo;
    function increment() {
        return pre+(++cont);
    }
    return increment;
}

normal = senha('N');
preferencial = senha('P');
retorno = senha('R');


