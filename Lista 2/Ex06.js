var nomes = prompt("Digite varios nomes separados por virgulas");
nomes = nomes.split (",");

for (i=nomes.length-1; i >=0; i--) {
    console.log ("Nomes [", i, "] =", nomes[i]);
}
