var lado = prompt("digite o valor de um dos Lados do quadrado:");

function AreaQuadrado (lado){
    area = lado * 4;

    return area;
}

console.log(AreaQuadrado(lado));
console.log("o dobro dessa area é: "+ AreaQuadrado(lado) * 2);