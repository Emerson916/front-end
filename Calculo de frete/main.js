"use strict"

// metodos para manipulação de objeto DOM 

/*document.getElementById("total").innerText = "SENAI";*/
//document.querySelector("#total")

const distancia = document.getElementById("distancia");
const Qtdpedagios = document.getElementById("pedagios");
const calcular = document.getElementById("calcular");
const pedagio = document.getElementById("pedagio");
const total = document.getElementById("total");

function calculaPedagio() {
    
    const valorPedagio = 9.40;
    const resultado = Number(Qtdpedagios.value) * valorPedagio;
    pedagio.innerText = resultado.toFixed(2);

    const valorEmKM = 6.00;
    const conta = Number(distancia.value) * valorEmKM + resultado;
    total.innerText = conta.toFixed(2);
}
calcular.addEventListener("click", calculaPedagio);



   


