var int = prompt ("Digite dois Numeros inteiros separados por virgula:");
int = int.split(",");
var real = prompt("Digite um numero real:");

primeiro = parseInt(int[0]);
segundo = parseInt(int[1]);
terceiro = parseFloat(real);

function ProdutoDobro (primeiro, segundo){
    resultado1 = (2*primeiro) * (segundo/2);

    return resultado1;
}

function SomaTriplo (primeiro, terceiro){
    resultado2 = (3*primeiro) + terceiro;

    return resultado2;
}

function Elevado (terceiro){
    resultado3 = terceiro ** 3;

    return resultado3;
}

console.log("Produto do Dobro do primeiro com metade do Segundo --> "+ ProdutoDobro(primeiro,segundo));
console.log("A soma do Triplo do primeiro com o Terceiro --> "+ SomaTriplo(primeiro,terceiro));
console.log("O Terceiro elevado ao cubo --> "+ Elevado(terceiro));