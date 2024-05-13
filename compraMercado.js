import prompt from "prompt-sync"
let ler = prompt(); 


let soma = 0
let anterior =

console.log('bem vindo ao mercado')

for (let preco = Number(ler()); preco != 0 ; preco = Number(ler())) {

    if (preco > 0) {
        anterior = preco
        soma = soma + preco
        }
        
        if (preco == -1) {
        soma = soma - anterior
        }
        
        console.log(`O total da sua compra é ${soma}`) 
        
    

}