import prompt from "prompt-sync"
let ler = prompt();

console.log('converter kilos em gramas')

console.log('coloque quantos kilos vc quer transformar em gramas')
let kilos = ler()

let calculo = kilos * 1000

console.log(`${kilos} kilos serão ${calculo} gramas! `)