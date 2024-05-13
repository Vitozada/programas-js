import prompt from "prompt-sync"
let ler = prompt(); 

console.log('informe um numero')
let numero = ler()
let vezes= 1

console.clear()
for(let contador = 1; contador <= 10; contador++ && vezes ++){

    console.log( numero + " X " + vezes + " = " + (numero * vezes))



}