console.log('\nTrabalhando com condicionais');
const idadeComprador = 18;
const estaAcompanhada = true;
let passagemComprada = false; // ainda nao tem passagem comprada
const destino = 'São Paulo';
const listaDeDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Rio Grande do Sul`);
console.log('\n Destinos possiveis para a compra:');
console.log(listaDeDestinos);
const podeComprar = (idadeComprador >= 18 || estaAcompanhada);

let contador = 0; // inicialização do loop
let destinoExiste = false;
while (contador < 3) { // enquanto
    if (listaDeDestinos[contador] == destino) { // [contador] - Mostra o item da lista
        destinoExiste = true;
        break; // para a execução do loop
    }
    
    contador += 1; // contador = contador + 1
}

console.log('\nDestino existe: ', destinoExiste);

if(podeComprar && destinoExiste) {
    console.log('Boa Viagem !');
} else {
    console.log('Desculpe, tivemos um erro !');
}

for (let cont = 0; cont < 3; cont++) { // (declar variavel; condição; incremento)
    if (listaDeDestinos[cont] == destino) { // [cont] - Mostra o item da lista
        destinoExiste = true;
    }
}

// a diferença de while e for é que o for é mais usado quando sabemos o limite de repetições
// o while é mais usado quando não sabemos o limite de repetições