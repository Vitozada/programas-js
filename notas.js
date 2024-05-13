import prompt from "prompt-sync"
let ler = prompt(); 

console.log('me diga quanto tirou na primeira prova')
let n1 = Number(ler())

console.log('me diga quanto tirou na segunda prova')
let n2 = Number(ler())


console.log('me diga quanto tirou na terceira prova prova')
let n3 = Number(ler())

let media = (n1 + n2 + n3 ) / 3

console.log(`a media foi de ${media}
   o aluno passou? ` + (media >= 6 )  )


