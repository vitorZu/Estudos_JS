var raio = prompt ("DIGITE O VALOR DE UM RAIO QUALQUER...");

const pi = 3.1415;
// let diametro = raio ** 2;
function AreaCirculo (raio){
    diametro = raio * raio ;
    area = diametro * pi;

    return area;

}

console.log(AreaCirculo(raio));