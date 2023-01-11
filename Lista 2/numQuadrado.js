//Insere numeros separado por virgulas e printa o quadrado de cada um deles//

var numeros=prompt ("Digite os números, separados por vírgula:");
numeros = numeros.split (",");
for (i=0; i<numeros.length; i++) {
    quadrado = parseInt (numeros [i]) * parseInt (numeros[i]);
    console.log ("O quadrado do nro" + numeros[i] +
    "=" + quadrado);
}