console.log("///////////////////////////////////////////////////");
function cubo(numero){
    return numero*numero*numero;
}

console.log(cubo(5));
console.log("///////////////////////////////////////////////////");

function potencia(base,expoente){
    var resultado =1;
    for(let cont=0;cont<expoente;cont++){
        resultado *= base;
    }
    return resultado;
}

console.log(potencia(2,4));
console.log(potencia(9,3));
console.log(potencia(3,5));
console.log(potencia(7,3));

console.log("///////////////////////////////////////////////////");