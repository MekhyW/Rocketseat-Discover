console.log("First steps in Javascript, FINALLY!")

let variable = 1 + 2
console.log(`Variable equals ${variable}`)
//"let" for local variables, "const" for immutable local, "var" for global


console.log(`Is undefined the same as null? Answer: ${undefined === null}`)


function sum(num1, num2){
    return num1+num2
}
function exibeMensagem(arg1, arg2) { 
    mensagem = `This is a function with arguments ${arg1} and ${arg2}, whose sum is ${sum(arg1, arg2)}`;
    console.log(mensagem); 
    var mensagem;
}
exibeMensagem(1, 2)


final = () => {
    console.log(`This is also a function`)
}