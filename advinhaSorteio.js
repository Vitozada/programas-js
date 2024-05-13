import prompt from "prompt-sync"
let ler = prompt();

let sorteado =parseInt(Math.random() * 1000 );


for(let i = 1; i <= 10; i ++){

console.log('tente acertar o numero aleatorio!')
let advinhação = Number(ler())

if(advinhação == sorteado){

    console.log('sua escolha é: ' + advinhação);
    console.log('Acertou!!')
    break;
}

else if (advinhação > sorteado){

    console.log('sua escolha é: ' + advinhação);
    console.log('MENOR')

    console.log(sorteado)

}

else if (advinhação < sorteado){

    console.log('sua escolha é: ' + advinhação);
    console.log('MAIOR')


}




}

console.log('\nfim de jogo ');