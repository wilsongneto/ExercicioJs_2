//Exercício 1
//Dados iniciais da viagem
const distanciaKm = 200;
const consumoKmL = 40;
const precoL = 6.70;

//Calcular quantidade de litros necessário
const totalLitros = distanciaKm / consumoKmL;
//Calcular custo total
const consumoTotal = consumoKmL * precoL;
const custoTotalArr = Math.round(consumoTotal*100) /100;

//Mostrar resultado
// console.log(`O carro com ${distanciaKm.toFixed(2)} Km, fez ${totalLitros} Km/l. E gastou R$${consumoTotal.toFixed(2)}`);
console.log(`Resumo da viagem: Distância: ${distanciaKm} km. Consumo do veículo: ${consumoKmL} km/l. Preço do combustível: R$ ${custoTotalArr.toFixed(2)}`);

//Exercício 3

const numeroParaVerificar = 12;
let numPrimo = true; // Começa assumindo que o número é primo

//Número menor que 2 não pode ser primo
if(numeroParaVerificar < 2) {
    numPrimo = false;
} else {
  //O laço testa todos os divisores possíveis, de 2 até um antes do número
    for(let i = 2; i <= Math.sqrt (numeroParaVerificar); i++) {
      //Se o resto da divisão do número por i for 0...
        if(numeroParaVerificar % i === 0) {
          //...significa que encontramos um divisor. Logo, não é primo
            numPrimo = false;
            break;
        }
    }
}
//Exibe o resultado final com base no valor da variável 'numPrimo'
if(numPrimo) {
    console.log(`${numeroParaVerificar} é primo`);
} else {
    console.log(`${numeroParaVerificar} não é primo`)
}
