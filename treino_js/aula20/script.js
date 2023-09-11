let clientes = [];
countclientes = 0;

function addCliente(nome) {
    clientes[countclientes] = nome;
    countclientes++;
}

function printClientes() {
    console.log(clientes);
}