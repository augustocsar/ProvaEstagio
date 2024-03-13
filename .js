//Questão 1

let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {

K = K + 1;

SOMA = SOMA + K;

}

console.log(SOMA);

//Imprimirá 91 no console

//Questão 2 

function fibonacci(n) {
    let fib = [0, 1];
    while (fib[fib.length - 1] < n) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    if (fib.includes(n)) {
        console.log(n + " pertence à sequência de Fibonacci.");
    } else {
        console.log(n + " não pertence à sequência de Fibonacci.");
    }
}
fibonacci(34);  // Substitua 34 pelo número que deseja verificar

//Questão 3 

/*  a) Adiciona 2 a cada passo. Próximo elemento: 9. 
    b) Multiplica por 2 a cada passo. Próximo elemento: 128. 
    c) Quadrados de números naturais. Próximo elemento: 49. 
    d) Quadrados de números pares. Próximo elemento: 100. 
    e) Sequência de Fibonacci. Próximo elemento: 13. 
    f) Adiciona 8, depois 2 repetidamente. Próximo elemento: 20.*/

//Questão 4 

/* Ligue o primeiro interruptor e deixe-o ligado por alguns minutos.
Depois de alguns minutos, desligue o primeiro interruptor e ligue o segundo interruptor.
Vá até a sala das lâmpadas.
Agora, na sala das lâmpadas, você verá que uma das lâmpadas está acesa, uma está apagada e quente, e a outra está apagada e fria.

A lâmpada que está acesa é controlada pelo segundo interruptor (porque você o deixou ligado).
A lâmpada que está apagada mas quente é controlada pelo primeiro interruptor (porque estava ligada, mas você a desligou, então a lâmpada ainda está quente).
A lâmpada que está apagada e fria é controlada pelo terceiro interruptor (porque nunca foi ligada). */

//Questão 5

let str = prompt("Digite a string que deseja inverter:");
let reversed = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);

/*Este código solicita ao usuário que insira a string que deseja inverter, percorre a string de trás para frente e adiciona cada caractere à string
Finalmente, ele imprime a string invertida. Isso atende aos requisitos de receber a string como entrada do usuário e evitar o uso da função pedida no enunciado */