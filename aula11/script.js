// Converter o Number promp ou coverter usando let
// const numero = Number(prompt ('Digite um numero: '))
let numero = prompt('Digite um número');
numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML= numero;
texto.innerHTML='';
texto.innerHTML +=`<p> Seu número mais 2 é ${numero + 2}.</p>`;
texto.innerHTML +=`<p> A raiz quadrada dele é : ${numero ** 2}`;
texto.innerHTML +=`<p>Ele é um inteiro ? ${Number.isInteger(numero)}`;
texto.innerHTML +=`<p> Arredondando ele para baixo ele é : ${Math.floor (numero )}.</p>`;
texto.innerHTML +=`<p> Arredondando ele para cima ele é : ${Math.ceil (numero)}.</p>`;
texto.innerHTML +=`<p> Ele com duas casa decimais é : ${numero.fixed(2)}.</p>`;
