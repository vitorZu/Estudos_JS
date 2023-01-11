//Insere uma sequencia de numeros separados por virgula e mostra qual deles é o maior//

var numeros=prompt ("Digite os números, separados por vírgula:");
numeros = numeros.split (",");
var maior =parseInt(numeros[0]);
    for(i=1; i<numeros.length; i++) {
        if (parseInt(numeros[i]) > maior) {
            maior = parseInt (numeros[i]);
        }
    }
    console.log("Maior número da sequencia = " +maior);