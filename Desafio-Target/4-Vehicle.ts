const distancia = 100;
const carro = 110;
const caminhao = 80;
const pedagio = 10;

let tempo = distancia / (carro + caminhao);
let distanciaCarro = carro * tempo;
let distanciaCaminhao = caminhao * tempo + pedagio/60 * caminhao;

if (distanciaCarro < distanciaCaminhao) {
    console.log("O carro estará mais próximo da cidade de Ribeirão Preto.");
} else {
    console.log("O caminhão estará mais próximo da cidade de Ribeirão Preto.");
}
