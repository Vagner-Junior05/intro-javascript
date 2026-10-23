// VARIAVEIS = São identificadores que nos permitem
// acessar um valor armazenado durante a execução de um
// programa.

// Pense em uma caixa etiquetada.
// A etiqueta é o nome da variável
// O conteúdo é o valor que ela representa

// O JavaScript possui três formas de declarar variáveis
// declaração nomeDaVariavel = valor da variável

// 1 - const
const nome = "Vagner"; // Não pode ser reatribuída
console.log(nome);

// 2 - let
// Permite alterar o valor da variável

let pais = "Brasil";
console.log(pais);

// reatribuindo um valor à variável
pais = "Portugal";
console.log(pais);

pais = "Marrocos";
console.log(pais);

// 3 - var (NÃO RECOMENDADO)
// É a forma antiga de declaração. Ainda funciona, mas
// geralmente deve ser EVITADA em códigos modernos.

var cidade = "São Paulo";
var idade = 24;