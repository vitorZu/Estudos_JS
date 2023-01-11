var MB = prompt("entre com o tamanho do arquivo que será baixado (em Mb):");
var Mbps = prompt("Informe a velocidade da sua internet (em Mbps):");

function Download (Megabyte,Megabiteporsegudo){
    segundos = Megabyte/(Megabiteporsegudo/8);

    return segundos.toFixed(2);
}

console.log("Um arquivo de "+MB+"Mb baixando há "+Mbps+"Mb/s, demorará "+Download(MB,Mbps)+" segundos para ser baixado.")