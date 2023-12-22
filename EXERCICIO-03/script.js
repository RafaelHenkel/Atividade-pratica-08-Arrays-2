// Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.


//Criar variaveis
let vetorNumerosPerfeitos = [];
let numeros = 1;
//A
for (; vetorNumerosPerfeitos.length < 4; ) {
  let soma = 0;
  for (let i = 1; i < numeros; i++) {
    if (numeros % i == 0) {
      soma += i;
    }
  }
  if (soma == numeros) {
    vetorNumerosPerfeitos.push(numeros);
  }
  numeros++;
}
console.log(vetorNumerosPerfeitos);
