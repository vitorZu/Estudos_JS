var item = prompt("Qual item vc quer comprar:");
var qtdItem = prompt("Qual a quantidade desssa item:");


let produtos = [
    maca= {
        nome:'Maçã',
        preco: 5.99,
        und: 50,
    },
    sabao= {
        nome: 'Sabão',
        preco: 7.00,
        und: 5,  
    },
    parafuso={
        nome:'Parafuso',
        preco: 0.30,
        und:300,
    },
]

let pedido = {
    qtd: qtdItem,

}


produtos.forEach((produtoAtual) => {
    if(item == produtoAtual.nome){
        pedido.item = produtoAtual.nome;
        console.log(pedido.qtd+"..."+pedido.item+"=> R$"+(produtoAtual.preco*pedido.qtd));
        produtoAtual.und -= pedido.qtd;
    }
});

delete pedido.item;
console.log(pedido);