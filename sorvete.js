import prompt from "prompt-sync"
let ler = prompt(); 

const preco = 3.50
const precoA = 3.00 // pra mais de 1KG
let calculo = 0

console.log('Digite o total de gramas do seu sorvete!!')
let gramas = ler()

if( gramas <= 0 ){


console.log('peso invalido');

}
else if(gramas < 1000 ){

calculo = (gramas * preco) / 100

}
else if(gramas >= 1000 ){

    calculo = (gramas * precoA) / 100
    
    }
    
console.log(`o total a pagar é ${calculo}  `)