var alt = prompt("Insira a altura de uma pessoa para ver seu peso ideal:");

function PesoIdeal (altura){
    peso = (72.7 * altura) - 58;

    return peso.toFixed(2);
}

console.log("O peso ideal para a altura digitada é de "+PesoIdeal(alt)+"Kg.");