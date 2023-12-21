// Desenvolva um algoritmo para percorrer um vetor de 15 elementos
// inteiros já preenchido e imprima todos os valores pares.

let vetoresInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (const valores of vetoresInteiros) {
  if (valores % 2 == 0) {
    document.write(valores, "<br>");
  }
}
