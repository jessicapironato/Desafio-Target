/*
5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/
let word = 'desafio';
let invertida = '';

for (let index = 0; index < word.length; index += 1) {
  
    invertida= invertida + (word[word.length - 1 - index]);
}

console.log(invertida)