var salariohora = prompt("Informe Quanto vc ganha por hora trabalhada:");
var horaTrabalhada= prompt("Informe quantas horas vc trabalha no mês:");

salarioBruto = salariohora * horaTrabalhada;
ir = salarioBruto * 0.11;
inss = salarioBruto * 0.08;
sindicato = salarioBruto * 0.05;
salarioLiquido= salarioBruto - ir - inss - sindicato;

console.log("+ Salario Bruto: R$"+salarioBruto);
console.log("- IR: R$"+ir);
console.log("- INSS: R$"+inss);
console.log("- Sindicato: R$"+sindicato);
console.log("= Salario Líquido: R$"+salarioLiquido);