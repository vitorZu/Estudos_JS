var parede = prompt("Informe o tamanho da area a ser pintada (em m²):");

qtdLitros = parede /6;
qtdLitrosFolga = qtdLitros + (qtdLitros *0.10);

//latas 18L = 80 reais
//galões 3.6L = 25 reais

function Lata (litros){
    qtdlatas = litros /18;

    return Math.ceil(qtdlatas);
}
function Galao (litros){
    qtdgalao = litros /3.6;

    return Math.ceil(qtdgalao);
}
if (qtdLitrosFolga > 18){
    divisao = qtdLitrosFolga / 18;
    latas = Math.floor(divisao);
    resto = qtdLitrosFolga % 18;
    galoes = Math.ceil(resto/3.6);
}else {

    latas = 1;
    galoes = 0;
}

valorTotal = (galoes*25) + (latas*80);

console.log("Caso compre só latas, irá precisar de "+Lata(qtdLitrosFolga)+"UN de Latas, custando R$"+Lata(qtdLitrosFolga)*80);
console.log("Caso só galões, será "+Galao(qtdLitrosFolga)+"UN de Galões, custando R$"+Galao(qtdLitrosFolga)*25);
console.log("Já a opção mais em conta seria comprar "+latas+" latas e "+galoes+"galões, dando um total de R$"+valorTotal+" reais.");