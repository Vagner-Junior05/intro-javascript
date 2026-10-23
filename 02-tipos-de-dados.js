// O JavaScript possui 8 tipos de dados, sendo 7 deles, os
// tipos primitivos
// TIPOS PRIMITIVOS = Dados básicos da linguagem

// 1 - String
// O tipo String representa sequências de caracteres
// Ou seja, nomes, mensagens, endereços, emails e textos
// em geral.

const nome = "Vagner"; // String com aspas duplas
const cidade = 'São Paulo';
const mensagem = `Olá, fulano`

console.log(nome);
console.log(cidade);
console.log(mensagem);

// 2 - Number - NÚMEROS
// O JavaScript utiliza o tipo Number para números
// inteiros e decimais.

const idade = 24;
const altura = 1.75;
const preco = 49.90;
const temperatura = -5.70;

console.log(idade);
console.log(altura);
console.log(preco);
console.log(temperatura);

// 3 - BigInt
// O tipo bigint permite representar números inteiros muito grandes, que ultrapassam o limite do tipo Number.

const bigInt = 1234567890123456789012345678901234567890n;
// o "n" no final do número indica que é um BigInt

console.log(bigInt);

// 4 - Boolean
// O tipo boolean representa 2 valores lógico, que pode ser
// true = verdadeiro ou false = falso.

// É muito utilizado para verificar condições, como por exemplo, se um usuário está logado ou não.

const estaLogado = true;
const possuiPagamentoPendente = false;

console.log(estaLogado);
console.log(possuiPagamentoPendente);
