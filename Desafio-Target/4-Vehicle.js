var distancia = 100;
var carro = 110;
var caminhao = 80;
var pedagio = 10;
var tempo = distancia / (carro + caminhao);
var distanciaCarro = carro * tempo;
var distanciaCaminhao = caminhao * tempo + pedagio / 60 * caminhao;
if (distanciaCarro < distanciaCaminhao) {
    console.log("O carro estará mais próximo da cidade de Ribeirão Preto.");
}
else {
    console.log("O caminhão estará mais próximo da cidade de Ribeirão Preto.");
}
