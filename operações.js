import prompt from "prompt-sync"
let ler = prompt(); 


let n1 = 0
let n2 = 0
let resultado = 0

console.log('1 Somar')
console.log('2 Subtrair')
console.log('3 multiplicar')
console.log('4 dividir')
console.log('5 potência')
console.log('6 Raiz quadrada')
console.log('0 Sair')
let escolha = Number(ler())

if(escolha == 1){               //soma

console.log('escolha dois numeros para fazer uma adição!')
    n1 += Number(ler())
    n2 += Number(ler())
    resultado = n1 + n2 

    console.log(`O resultado é: ${resultado}`)
    
}

else if(escolha == 2){      //subtrair

    console.log('escolha os numeros para fazer uma subtração')
    n1 += Number(ler())
    n2 += Number (ler())
    resultado = n1 - n2

    console.log(`O resultado é: ${resultado}`)

}

else if(escolha == 3){      //multiplicar

    console.log('escolha os numeros para fazer uma multiplicação')
    n1 += Number(ler())
    n2 += Number (ler())
    resultado = n1 * n2

    console.log(`O resultado é: ${resultado}`)
}


else if(escolha == 4){      //dividir
    console.log('escolha os numeros para fazer uma divisão')
    n1 += Number(ler())
    n2 += Number (ler())
    resultado = n1 / n2

    console.log(`O resultado é: ${resultado}`)
}


else if(escolha == 5){      //potencia
    console.log('escolha os numeros para fazer uma potenciação');
    n1 += Number(ler())
    n2 += Number (ler())
    resultado = n1 ** n2 

    console.log(`O resultado é: ${resultado}`)


}


else if(escolha == 6){      //raiz quadrada

    console.log('escolha o numero para saber a razi quadrada');
    n1 += Number(ler())
    resultado = Math.sqrt(n1)

    console.log(`O resultado é: ${resultado}`)

}


else if(escolha == 0){

console.log('você escolheu sair!')

}
