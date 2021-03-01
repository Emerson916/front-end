"use strict"; /*Para avisar, caso haja muitos erros de sintaxe*/

/*console.log("Teste");*/


const media = 6;

let situacao;

if(media >= 5){
    situacao = "Aprovado";
}
else{
   situacao = "Reprovado";
}

console.log (situacao);

//fim - Estrutura condicional

// Estrutura de repetição


/*
let cont = 1;
while (cont <= 10){
    console.log (cont);
    cont ++;
}
*/

for (let cont=1; cont <= 10; cont++){
    console.log (`Aluno ${cont}`);
}