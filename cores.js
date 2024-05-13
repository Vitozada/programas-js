import prompt from "prompt-sync"
let ler = prompt();

console.log("descubra se a cor é primária")

console.log("digite duas cores")
let cor = ler ()
cor = ler()


 console.log  ( "as cores são primarias? " + (cor == "vermelho "|| cor == "azul" || cor == "amarelo" ) )