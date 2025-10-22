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
