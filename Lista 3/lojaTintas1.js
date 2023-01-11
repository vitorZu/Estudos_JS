var parede =prompt("Informe o tamanho da area a ser pintada em metros quadrados:");

QtdLitros = parede /3;
Qtdlatas = QtdLitros / 18;

console.log ("Para sua parede de "+parede+"m² será nescessário uma quantidade de "+QtdLitros+"L litros de tinta");
console.log("Uma quantidade de "+Math.ceil(Qtdlatas));