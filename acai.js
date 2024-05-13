import prompt from "prompt-sync"
let ler = prompt(); 

const medio = Number(15.0)
const pequeno = Number(13.50)
const Grande = Number(17.50)


console.log('bem vindo ao açai das infos')

console.log('você quer quantos açais pequenos?')
let pequenos = ler() * pequeno

console.log('você quer quantos açais Médios ?')
let medios = ler() * medio

console.log('você quer quantos açais grandes?')
let grandes = ler() * Grande

let calculo = pequenos + medios + grandes

console.log(`\n\nO total é de ${calculo}`)

