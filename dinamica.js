import prompt from "prompt-sync"
let ler = prompt();

console.log("descubra seu desconto")

console.log("digite o valor da sua compra")
let x = Number(ler())

console.log("digite seu valor de desconto")
let y = Number(ler())

let calculo = x-y

console.log(`compra finalizada! o total é de ${calculo}`)