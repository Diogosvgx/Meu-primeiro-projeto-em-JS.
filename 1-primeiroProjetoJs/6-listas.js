// console.log('`Trabalhandio com listas`');
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
`Salvador`,
`São Paulo`,
`Rio de Janeiro`
);

// Array é um conjunto de dados

listaDeDestinos.push(`Rio Grande do Sul`); // Adicionando um item na lista

// console.log('Destinos possíveis:');
// console.log(salvador);
// console.log(saoPaulo);
// console.log(rioDeJaneiro);

listaDeDestinos.splice(1, 1); // Removendo um item da lista (posição, quantos)
console.log(listaDeDestinos);

console.log(listaDeDestinos[2]); // Acessando um item da lista (posição)

