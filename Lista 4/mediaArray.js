let numeros = [7, 6, 5, 5, 10, 4, 9];
soma = 0;
media= 0;
for (i = 0; i <numeros.length;i++){
    soma+=numeros[i];
}

media= soma/numeros.length;

console.log(parseInt(media));