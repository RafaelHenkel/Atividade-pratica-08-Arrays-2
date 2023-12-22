// Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson

let nomes = [];

for (let i = 0; i <= 4; i++) {
  nomes.push(prompt(`digite o ${i} nome`));
  console.log(nomes[i]);
}

for (let i = 4; i >= 0; i--) {
  console.log(nomes[i]);
}
