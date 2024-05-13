import prompt from "prompt-sync"
let ler = prompt(); 

console.log("descubra em quanto tempo você lerá um livro")

console.log("digite o nome do livro")
let nome = ler()

console.log("digite a quantidade de páginas")
let pag = ler()

console.log("digite quantos segundos vc leva em uma página")
let segundos = ler()

let calculo = pag * segundos
let result = (calculo / 60) / 60

console.log(`você lerá ${nome} em ${result.toFixed(1)}`)