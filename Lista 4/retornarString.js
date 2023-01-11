let str = ['Joao','Maria','Petruquio','XandãoLindo','pneumoultramicroscopicossilicovulcanoconiótico']
MaiorSTR = 'o'

for(i=0; i<str.length; i++){        
    if(str[i].length > MaiorSTR.length ){
        MaiorSTR = str[i];
    }


}

console.log(MaiorSTR);