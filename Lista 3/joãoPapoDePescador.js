var peso = prompt ("Quantos kilos foram lidos na Balança? :");
peso = parseFloat(peso);

multao = 0;
excesso = 0;

if(peso > 50 ){
    excesso = peso - 50;
    multao = excesso * 4;
}

if(peso> 50){
    console.log("O senhor excedeu em "+excesso+"kg o peso permitido.");
    console.log("Portanto o sehor pagará uma multa de R$"+multao+" baseado no peso excedido.");
}else
console.log("O senhor não ultrapassou o peso adequado de peixes, por tanto não haverá multa.");