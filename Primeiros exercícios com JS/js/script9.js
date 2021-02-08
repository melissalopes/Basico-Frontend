let nome = prompt ("Digite seu nome");
let anonasc = parseInt(prompt("Informe o ano em que você nasceu"));
let anoatual = parseInt(prompt("Informe o ano atual"));

let idade = anoatual - anonasc ;

console.log("Nome: " + nome + "\nIdade: " + idade);