import prompt from "prompt-sync"
let ler = prompt(); 


let situação = ""

console.log("descubra a sua situação com base em sua temperatura")

console.log("digite a sua temperatura")
let temp = ler()

if( temp <36 ){
    situação = "hipotermia"
}
else if( temp >= 36 && temp < 37.6){
    situação = "normal"
}
else if( temp >= 37.6 && temp < 39.6){
    situação = "febre"
}
else if( temp >= 39.6 && temp < 41){
    situação = "febre alta"
}
else if(temp>= 41){
    situação = "hipertermia"
}

console.log(`a situação para sua temperatura é ${situação}`)
