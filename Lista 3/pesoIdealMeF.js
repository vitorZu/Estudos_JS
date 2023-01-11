var altura = prompt("Digite a altura dessa pessoa:");
altura = parseFloat(altura);

function PesoidealM (altura){
    pesom = (72.7*altura) - 58; 

    return pesom;
}
function PesoidealF (altura){
    pesof =  (62.1*altura) - 44.7; 

    return pesof ;
}

console.log ("O peso ideal para essa pessoa caso ela seja Homem é "+ PesoidealM(altura)+"kg");
console.log ("Caso seja Mulher é de "+ PesoidealF(altura)+"kg");