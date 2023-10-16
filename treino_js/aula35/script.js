//ECMAScript vs TypeScript

// pessoa | funcionario | cliente

function Pessoa(nome, cpf, nascimento) {
    this.nome = nome;
    this.cpf = cpf;
    this.nascimento = nascimento;
    this.idade = function () {
        const hoje = new Date();
        return hoje.getFullYear() - this.nascimento.getFullYear();
    }
}

function Cliente(nome, cpf, nascimento, limite) {
    Pessoa.call(this,nome,cpf,nascimento)
    this.saldo = 0;
    this.limite = limite;
    this.sacar = function (valor) {
        if (this.saldo + this.limite > valor){
            this.saldo -= valor;
            console.log('Retire seu dinheiro');
        }else {
            console.log('Saldo insuficiente!');
        }
    }
    this.depositar = function (valor) {
        if(valor > 0) {
            this.saldo += valor;
            console.log('Depósito realizado com sucesso!');
            return;
        }
        console.log('Erro de processamento de depósito!');
    }
    this.extrato = () => console.log(`O saldo de ${this.nome} é de ${this.saldo}`);
}

function Funcionario(nome, cpf, nascimento, salario) {
    Cliente.call(this,nome,cpf,nascimento, 3000)
    this.salario = salario;
    this.pagamento = function () {
        this.depositar(this.salario);
    }
}

let paulo = new Funcionario('Paulo', '111.111.111-11',
    new Date (1989,9,8), 5000
)

let leticia = new Cliente('Leticia', '111.111.111-33',
    new Date (1990,5,7), 1000
)


paulo.nome = 'Paulo Afonso'
// console.log(paulo.nome, paulo.idade(), paulo.salario)
// console.log('Saldo:', leticia.saldo);
// console.log(leticia.nome, leticia.idade())
paulo.extrato()
// paulo.pagamento()
// paulo.sacar(500)
// paulo.sacar(800)
// paulo.extrato()

