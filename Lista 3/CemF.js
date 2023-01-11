var C = prompt("Digite uma temperatura em Celsius para ser convertida em Farenheit:");

function Converter (Celsius) {
    F = ((Celsius*9)/5)+32;

    return F.toFixed(2);
}

console.log(C+"°C são "+Converter(C)+"°F");