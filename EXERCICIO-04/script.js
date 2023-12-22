// Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.

let lista = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let digiteNumero = Number(prompt("Digite um numero"));
for (const numero of lista) {
  if (digiteNumero == numero) {
    document.write(`O numero digitado ${digiteNumero} está na lista`);
    break;
  } else {
    document.write(`O numero digitado ${digiteNumero} não está na lista`);
    break;
  }
}

// if (lista.includes(digiteNumero)) {
//   document.write(`O numero digitado ${digiteNumero} está na lista`);
// } else {
//   document.write(`O numero digitado ${digiteNumero} não está na lista`);
// }
