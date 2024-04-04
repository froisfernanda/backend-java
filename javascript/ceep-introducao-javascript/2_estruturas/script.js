//Exemplo de Funções Built-in
//Prompt:
let nome = prompt('Informe o seu nome:');

//Alert:
let mensagem = `Seja bem vindo ${nome}´;
alert(mensagem)
*Math.x:
*
*Tipos de Math.x:
*Math.max();
*Math.min();
*Math.random();
*Math.pow();
*Math.sqrt();
*etc ...
*
*/
let maiorNumero = Math.max(10, 5, 7, 9, 2, 1, 3, 4, 6, 8); //Mostra o maior numero
let menorNumero = Math.min(10, 5, 7, 9, 2, 1, 3, 4, 6, 8); //Mostra o menor numero
let menorNumero = Math.floor(Math.random()*100); //Math random() criar um numero 0 e 1, enquanto o Math.floor ele arredonda o numero
let numeroElevado = Math.pow(2, 3); //vai realizar calculo de numero

//console.log:
Console.log(`Maior numero: $(maiorNumero)`);
Console.log(`Menor numero: $(menorNumero)`);
Console.log(`Maior aleatorio: ${numeroAleatorio}`);
