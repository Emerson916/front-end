"use strict"

// Exercico - Fazer aparecer na tela, os números de 1 até 20, que são divisiveis por 2 e 3;


/*
for (let cont = 1; cont <=20; cont++){

    if(cont % 2 === 0 && cont % 3 === 0 ){
        console.log (cont);
    }
}
*/


for (let cont = 1; cont <=20; cont++){

    const divisivel2 = cont % 2 === 0;
    const divisivel3 = cont % 3 === 0;
    if (divisivel2 && divisivel3){
        console.log (cont);
    }
    
}