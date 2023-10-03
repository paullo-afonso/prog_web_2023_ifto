// switch case
// usado para converter ou testar um valor

//'t'

const codigo = prompt('digite o código do cargo:')

let cargo = '';
let nome = 'Paulo'

switch (codigo) {
    case 'p':
        nome = 'Prof.' + nome;
    case 'd':
        cargo = 'Professor';
        break;
    case 's':
        cargo = 'Servidor';
        break;
    case 'a':
        cargo = 'Aluno';
        break;
    case 'v':
        cargo = 'Vigilante';
        break;
    case 'm':
        cargo = 'Motorista';
        break;
    default:
        cargo = 'Convidado';
        break;

}

alert(`Olá ${nome}, Você é um ${cargo}`);