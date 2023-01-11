var F = prompt("Digite uma temperatura em Farenheit para ser convertida em Celsius:");

function Converter (Farenheit) {
    C = 5*(Farenheit-32)/9;

    return C.toFixed(2);
}

console.log(F+"°F são "+Converter(F)+"°C");