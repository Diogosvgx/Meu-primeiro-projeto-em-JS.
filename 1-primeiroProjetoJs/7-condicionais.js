console.log('Trabalhando com condicionais');
const idadeComprador = 18;
const estaAcompanhada = true; // Boolean
const passagemComprada = true;
const listaDeDestinos = new Array( // Nova Lista
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);
listaDeDestinos.push(`Rio Grande do Sul`); // Adicionando item
console.log(`Destinos possiveis para a compra: ${listaDeDestinos}`);
if (idadeComprador >= 18 || estaAcompanhada) { // || Ou
    console.log('Boa Viagem !');
    listaDeDestinos.splice(1, 1); // Removendo item
} else {
    console.log('Não é permitido a compra, pois o cliente é menor de idade e não está acompanhado');
}
console.log('Embarque: \n\n'); // \n Quebra de linha
if(idadeComprador >= 18 && passagemComprada) {
    console.log('Boa Viagem !'); // && E
} else {
    console.log('Você não pode embarcar');
}
console.log('Serviços disponiveis:');
console.log(listaDeDestinos);
