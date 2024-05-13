import prompt from "prompt-sync"
let ler = prompt(); 

let n1 = 0
let n2 = 0
let n3 = 0
const CIANO = '\x1b[36m%s\x1b[0m';
console.clear();

    while(n1 == 0 && n2 == 0 && n3 == 0){

console.log(`informe a nota 1`)
n1 = Number(ler())

    if (n1 <0 || n1 > 10 ){

console.log( 'Nota inválida. Ela deve estar entre 0 e 10')
 n1 = n1 - n1

}

 console.log(`informe a nota 2`)
 n2 = Number(ler())

    if(n2 <0 || n2 > 10 ){

    console.log(  'Nota inválida. Ela deve estar entre 0 e 10')
    n2 = n2 - n2
    
    }

 console.log(`informe a nota 3`)
 n3 = Number(ler())

 if(n3 <0 || n3 > 10 ){

    console.log( 'Nota inválida. Ela deve estar entre 0 e 10')
    n3 = n3 - n3
    
    }


}

const media = (n1 + n2 + n3) / 1

console.log( CIANO, `\n\nMédia calculada! 
A média é ${media}  `)