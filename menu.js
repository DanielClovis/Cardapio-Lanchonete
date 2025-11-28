/*  */

let opcao = Number(prompt(`
     Escolha uma opção
===========================
        [1] Salgado
        [2] Bebidas
        [3] Lanches
        [4] Sobremesas
        [5] Sair
===========================`
))

switch (opcao) {
    case 1:
        alert("Salgados")
        let sacolaSalgado = Number(prompt(
            `Qual salgado deseja comprar?
        ===============================
        [1] Coxinha R$:1 Real
        [2] Bolinha de queijo R$:1 Real
        [3] Bolinha de presunto e queijo R$:1 Real
        [4] Kibe R$:1 Real
        ===============================`
        ))
        switch (sacolaSalgado) {
            case 1:
                let unidadeCoxinha = Number(prompt("Quantas Coxinhas voce deseja Comprar"))
                let totalCompra = unidadeCoxinha * 2
                alert(`O valor das Coxinhas foi R$:${totalCompra}`)
                break;

            case 2:
                let unidadeQueijo = Number(prompt("Quantas Bolinhas de Queijo voce deseja Comprar"))
                let totalCompra1 = unidadeQueijo * 2
                alert(`O valor das Coxinhas foi R$:${totalCompra1}`)
                break;

            case 3:
                let unidadePresunto = Number(prompt("Quantas Coxinhas voce deseja Comprar"))
                let totalCompra2 = unidadePresunto * 2
                alert(`O valor das Coxinhas foi R$:${totalCompra2}`)
                break;

            case 4:
                let unidadeKibe = Number(prompt("Quantas Coxinhas voce deseja Comprar"))
                let totalCompra3 = unidadeKibe * 2
                alert(`O valor das Coxinhas foi R$:${totalCompra3}`)
                break;

            default:
                break;
        }
        break;
    case 2:
        alert("Bebidas")
        let sacolaBebidas = Number(prompt(`
        Qual Bebida Deseja Comprar?
    =================================
    [1] Coca Cola
    [2] Agua
    [3] Leite
    [4] Fanta Laranja
    =================================`))


        break;
    case 3:
        alert("Lanches")
        let sacolaLanches = Number(prompt(`
            Qual Lanche Deseja Comprar?
        =================================
        [1] X-Tudo
        [2] X-Salada
        [3] X-Bacon
        [4] X-Egg
        =================================`))


        break;
    case 4:
        alert("Sobremesas")
        let sacolaSobremesas = Number(prompt(`
            Qual Sobremesa Deseja Comprar?
        ====================================
        [1] Milk Shake
        [2] Sorvete
        [3] Bolo de Chocolate
        [4] Brigadeiro
        ====================================`))


        break;
    case 5:
        alert("Sair")
        break;

    default:
        alert("Nao existe essa opção")
        break;
}