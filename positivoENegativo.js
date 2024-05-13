import prompt from "prompt-sync"
let ler = prompt(); 


let somaPOZE = 0
let somaNEGA = 0
let continuar = 1
let numero = 0

while (continuar == 1){


console.log('Insira algum numero!');
numero = Number(ler())

if(numero < 0){

somaNEGA ++

}

else if(numero > 0){

    somaPOZE += numero

}

else if(numero == 0)

continuar = continuar - 1

}

console.log(`A soma dos numeros positivos é ${somaPOZE}
A quantidade de numeros negativos é ${somaNEGA}`)