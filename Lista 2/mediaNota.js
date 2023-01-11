var notas = prompt ("Digite as notas, separado por vírgulas:")
notas = notas.split(",");

var media = 0;

for(i=0; i<notas.length; i++){
    media += parseFloat (notas[i]);
} 
console.log("Média das notas = "+ (media/notas.length));