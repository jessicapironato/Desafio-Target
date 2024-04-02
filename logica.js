/*
3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, __

b) 2, 4, 8, 16, 32, 64, ____

c) 0, 1, 4, 9, 16, 25, 36, ____

d) 4, 16, 36, 64, ____

e) 1, 1, 2, 3, 5, 8, ____

f) 2,10, 12, 16, 17, 18, 19, ____
*/


// RESPOSTA: 9
function a() {
  for (let i = 1; i < 10; i += 2) {
      if (i > 7) {
          console.log(`a) ${i}`);
          return;
      }
  }
}
return a();
 

// RESPOSTA: 128
function b() {
  let num = 2;
  for (let i = 0; i < 6; i++) {
      num *= 2;
      console.log(`b) ${num}`);
  }
}
return b();


// RESPOSTA: 49
function c() {
  for (let i = 0; i < 8; i++) {
      console.log(`c) ${i * i}`);
  }
}
c();


// RESPOSTA: 66
function d() {
  for (let i = 2; i < 100; i += 2) {
      if (i > 64) {
          console.log(`d) ${i}`);
          return;
      }
  }
}
d();


// RESPOSTA: 13
function e() {
  let prev = 1;
  let curr = 1;
  console.log("e) " + prev);
  console.log("e) " + curr);
  for (let i = 2; i < 7; i++) {
      let next = prev + curr;
      console.log("e) " + next);
      prev = curr;
      curr = next;
  }
}
e();


// RESPOSTA: 200


function nextNumberD
() {
  var lastNum = 19; 
  var nextNum = lastNum + 1; 
  while (!startWithD
    (nextNum)) {
      nextNum++; 
  }
  return nextNum;
}


function startWithD
(num) {
  var numByLetter = numForLetter(num);
  return numByLetter.startsWith("d") || numByLetter.startsWith("D");
}


function numForLetter
(num) {
  var ones = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
  var tens = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
  var hundreds = ['cem', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

  if (num == 100) {
      return hundreds[0]; 
  } else if (num < 20) {
      return ones[num]; 
  } else if (num < 100) {
      var dezena = tens[Math.floor(num / 10) - 2];
      var unidade = (num % 10 !== 0) ? " e " + ones[num % 10] : "";
      return dezena + unidade; 
  } else {
      var centena = hundreds[Math.floor(num / 100) - 1];
      var dezena = (num % 100 !== 0) ? " e " + numForLetter
      (num % 100) : "";
      return centena + dezena; 
  }
}


console.log(nextNumberD()); 


