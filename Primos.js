import prompt from "prompt-sync"
let ler = prompt(); 


console.log('Insira um numero e iremos verificar se ele é primo ou não')
let numero = Number(ler())

if(numero == 0 || numero == 1){

    console.log('\nNão é um numero Primo')

}


for (let i = 2; i < numero; i++) {



    if (numero % i === 0) {
        console.log('\nNão é um numero Primo')
        break;
    }

    

    else{

        console.log('\nÉ um numero primo');
        break;
    }
}

