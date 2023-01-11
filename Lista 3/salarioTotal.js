var horasMes = prompt ("Digite quantas horas vc trabalha em um mês:");
var salarioHoras = prompt ("Digite quanto é seu salario por hora:");

function Salario (horasMes, salarioHoras){
    salarioTotal = salarioHoras * horasMes;;

    return salarioTotal;
}

console.log("Você recebe um total de R$"+Salario(horasMes,salarioHoras)+",00 reais.");