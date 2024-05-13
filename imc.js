import prompt from "prompt-sync"
let ler = prompt(); 

let situação = "" 

console.log("descubra o seu imc")

console.log('digite sua altura')
let altura = ler()

console.log('digite o seu peso')
let peso = ler()

let calculo = peso/(altura**2)

if(calculo >= 40){
    situação = "obesidade grau III"
}
else if(calculo > 35 && calculo <= 39.9){
    situação = "obesidade grau II"
}
else if(calculo > 30 && calculo <= 34.9){
    situação = "obesidade grau I"
}
else if(calculo > 25 && calculo <= 29.9){
    situação = "sobrepeso"
}
else if(calculo > 18.5 && calculo <= 24.9){
    situação = "peso normal"
}
else if(calculo < 18.5){
    situação = "abaixo do peso"
}

console.log(`seu IMC é ${calculo.toFixed(2)}  sua classificação é ${situação}`)