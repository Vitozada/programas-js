import prompt from "prompt-sync"
let ler = prompt(); 

let sexo = ''
let idade = 0
let nome = ""
let continuar = 1

var lista = []

while(continuar == 1){

    console.log('qual seu nome?');                      // pergunta nome
    nome = ler()

    console.log('Qual o seu sexo? M ou F? ')                     //pergunta sexo
    sexo = ler()

    console.log('qual sua idade?')                      //pergunta idade
    idade = Number(ler())


    let item = {'nome': nome, 'idade': idade, 'sexo': sexo  }

    lista.push(item)



    //ultimo
    console.log('você quer continuar? 1 para continuar e 0 para sair')
    continuar = parseInt(ler())
    console.log(continuar)

}


var maxima_idade = lista.filter(x => x['idade'] == Math.max(...lista.map(x => x['idade'])) )

var minimo_idade = lista.filter(x => x['idade'] == Math.min(...lista.map(x => x['idade'])) && x['sexo'] == 'F' )

var maiores = lista.filter(x => x['idade'] > 30 && x['sexo'] == 'M' )

var menores = lista.filter(x => x['idade'] < 18 && x['sexo'] == 'F' )

lista.length

let soma = 0

for(let i = 0; i < lista.length; i++){
    soma += lista[i].idade
}

const media = soma / lista.length

let pessoas = ''

for(let i = 0; i < maxima_idade.length; i++){
    pessoas += maxima_idade[i].nome;
}

let mulher = ''

for(let i = 0; i < minimo_idade.length; i++){
    mulher += minimo_idade[i].nome;
}

console.clear()
console.log(`A pessoal mais velha é ${ pessoas }`)

console.log(`A mulher mais jovem é ${ mulher }`)

console.log(`A media do grupo é ${ media }`)

console.log(`o Total de homens maiores que 30 é ${ maiores.length }`)

console.log(`O total de mulheres menores de 18 é ${ menores.length }`)


console.log('Fim')