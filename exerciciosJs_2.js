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

//Exercício 2
// Classificador de triângulos
const ladoA = 10;
const ladoB = 10;
const ladoC = 60;
//condição da existência do triângulo
if(ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    console.log("Os lados podem formar um triângulo")
 
//condicionais aninhadas
    if(ladoA === ladoB && ladoB === ladoC) {
        console.log("O triângulo é equilátero")
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        console.log("O triângulo é isóceles")
    } else {
        console.log("O triângulo é escaleno")
    }
} else {
    console.log("Os lados não podem formar um triângulo")
 }

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


// //Exercício 4
// //Análise de turma
// //Array de objeto com nome e nota do aluno
// //1-Calcular a média de nota da turma
// //2-Exibir nome do aluno com maior nota
// //3-Array com nome dos alunos aprovados(>=7)
const turma = [
    {nome: 'Ana', nota: 8},
    {nome: 'Carla', nota: 7},
    {nome: 'Miguel', nota: 9},
    {nome: 'Marcio', nota: 7},
    {nome: 'João', nota: 6}
];

let somaDasNotas = 0;
let alunoMelhorNota = turma[0];
const alunosAprovados = [];

for(let i = 0; i < turma.length; i++) {
    const aluno = turma[i];

    console.log("....", aluno);
    somaDasNotas += aluno.turma;

    if(aluno.nota > alunoMelhorNota.nota) {
        alunoMelhorNota = aluno;
    }

    if(aluno.nota >= 7) {
        alunosAprovados.push(aluno.nome);
    }
}

const mediaDaTurma = somaDasNotas / turma.length;

console.log(`A média de notas da turma é: ${mediaDaTurma.toFixed(2)}`)
console.log(`O aluno com maior nota é: ${alunoMelhorNota.nome}(nota ${alunoMelhorNota.nota}).`)
console.log(`Os alunos aprovados são: ${alunosAprovados}`);
