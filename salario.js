import prompt from "prompt-sync"
let ler = prompt();

console.log("descubra seu saláio líquido")

console.log("digite seu salário mensal")
let salário = Number(ler())

console.log("digite seu bonus mensal")
let bonus = Number(ler())

console.log("digite seu desconto em reais")
let desconto = Number(ler())

let calculo = (bonus/100)*salário
let total = (calculo + salário)-desconto

console.log(`seu salário líquido é de ${total}`)
