var idade = prompt("Digite as idades, separadas por virgula...");

idade = idade.split(",");

var maior = 0;
var menor = 0;

for(i=0; i<idade.length;i++){
    if (parseInt(idade[i]) >= 18) {
        maior++;
    }
    menor++;
}

console.log(maior+" Maiores de idade e "+menor+" menores de idade.");