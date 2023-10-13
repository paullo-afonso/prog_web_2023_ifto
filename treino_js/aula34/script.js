//ECMAScript vs TypeScript

let pessoa = {
    nome: 'Paulo',
    cpf: '222.222.222-22',
    nascimento: new Date(1990,12,10),
    alterarNome: function(novonome) {
        this.nome = novonome;
    },
    idade: function() {
        const hoje = new Date();
        let anos = hoje.getFullYear() - this.nascimento.getFullYear();
        const mes = hoje.getMonth() - this.nascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < this.nascimento.getDate())) {
            anos--;
        }
        return anos;
    }

};

pessoa.cpf = '222.222.222-32'
pessoa.alterarNome(pessoa.nome+' Afonso')

console.log(pessoa.idade());