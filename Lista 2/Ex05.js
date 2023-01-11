var sexo = prompt("Digite o sexo de 5 pessoas (M/F) separando-os com virgulas:");
var alt = prompt("Agora a altura das pessoas respectivamente separando-os com virgulas:");

sexo = sexo.split(",");
alt = alt.split(",");
var masc = 0;
var fem = 0;
var Malt = parseFloat(alt[0]);
var SexoMalt = sexo[0]; 

for(i=1;i<sexo.length;i++){
    if (sexo[i] == 'M' ){
        masc++;
    }else 
    fem++;
    if(parseFloat(altura[i]) > Malt){
        Malt = parseFloat(altura[i]);
        SexoMalt = sexo[i];
    }
}

console.log(masc," masculinos, ", fem," femininos. A maior altura é ",Malt," e pertence a uma pessoa do sexo ",SexoMalt);
