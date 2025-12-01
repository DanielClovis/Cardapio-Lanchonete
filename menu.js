1/*  */

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
      Salgados()
        break;
    case 2:
        Bebidas()
        break;
    case 3:
        Lanches()
        break;
    case 4:
        Sobremesas()
        break;
    case 5:
        alert("Sair")
        break;

    default:
        alert("Nao existe essa opção")
        break;
}




function Salgados(){
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
                alert(`O valor da Bolinha de queijo foi R$:${totalCompra1}`)
                break;

            case 3:
                let unidadePresunto = Number(prompt("Quantas Bolinhas De Queijo com presunto Voce deseja Comprar?"))
                let totalCompra2 = unidadePresunto * 2
                alert(`O valor da Bolinha de queijo com presunto foi R$:${totalCompra2}`)
                break;

            case 4:
                let unidadeKibe = Number(prompt("Quantos Kibe Voce deseja Comprar?"))
                let totalCompra3 = unidadeKibe * 1
                alert(`O valor dos Kibe Foi R$:${totalCompra3}`)
                break;

            default:
                break;
        }
}

function Bebidas(){
alert("Bebidas")
        let sacolaBebidas = Number(prompt(`
        Qual Bebida Deseja Comprar?
    =================================
    [1] Coca Cola: R$:10,00
    [2] Agua: R$:4,00
    [3] Leite: R$:15,00
    [4] Fanta Laranja: R$:8,00
    =================================`))
        switch (sacolaBebidas) {
            case 1:
                let unidadeCoca = Number(prompt("Quantas Coca Cola Voce Deseja Comprar?"))
                let totalCompra = unidadeCoca * 10
                alert(`O valor Da Coca Cola Foi R$:${totalCompra}`)
                break;

            case 2:
                let unidadeAgua = Number(prompt("Quantas Aguas voce deseja Comprar?"))
                let totalCompra1 = unidadeAgua * 4
                alert(`O valor da Agua foi R$:${totalCompra1}`)
                break;

            case 3:
                let unidadeLeite = Number(prompt("Quantos Litros de Leite voce deseja Comprar?"))
                let totalCompra2 = unidadeLeite * 15
                alert(`O valor dos Litros de Leite Foi R$:${totalCompra2}`)
                break;

            case 4:
                let unidadeFanta = Number(prompt("Quantas Fanta Laranja Voce deseja Comprar?"))
                let totalCompra3 = unidadeFanta * 8
                alert(`O valor da Fanta Laranja Foi R$:${totalCompra3}`)
                break;

            default:
                break;
        }
}

function Lanches(){
    alert("Lanches")
        let sacolaLanches = Number(prompt(`
            Qual Lanche Deseja Comprar?
        =================================
        [1] X-Tudo: R$:15,00
        [2] X-Salada: R$:9,00
        [3] X-Bacon: R$:9,00
        [4] X-Egg: R$:9,00
        =================================`))

        switch (sacolaLanches) {
            case 1:
                let unidadeTudo = Number(prompt("Quantos X-Tudo Voce gostaria de comprar?"))
                let totalCompra = unidadeTudo * 15
                alert(`O valor do X-tudo Foi R$:${totalCompra}`)
                break;
                
                case 2:
                let unidadeSalada = Number(prompt("Quantos X-Salada Voce gostaria de comprar?"))
                let totalCompra1 = unidadeSalada * 9
                alert(`O valor da Agua foi R$:${totalCompra1}`)
                break;

                case 3:
                let unidadeBacon = Number(prompt("Quantos X-Bacon voce gostaria de comprar?"))
                let totalCompra2 = unidadeBacon * 9
                alert(`O valor dos Litros de Leite Foi R$:${totalCompra2}`)
                break;

                case 4:
                let unidadeEgg = Number(prompt("Quantos X-Egg Voce gostaria de comprar?"))
                let totalCompra3 = unidadeEgg * 9
                alert(`O valor da Fanta Laranja Foi R$:${totalCompra3}`)
                break;
        
            default:
                break;
        }
}

function Sobremesas(){
    alert("Sobremesas")
        let sacolaSobremesas = Number(prompt(`
            Qual Sobremesa Deseja Comprar?
        ====================================
        [1] Milk Shake: R$:12,00
        [2] Sorvete: R$:12,00
        [3] Bolo de Chocolate: R$:20,00
        [4] Brigadeiro: R$:4,00
        ====================================`))

        switch (sacolaSobremesas) {
           case 1:
                let unidadeMilk = Number(prompt("Quantos Milk Shake voce gostaria de comprar?"))
                let totalCompra = unidadeMilk * 12
                alert(`O valor do Milk Shake Foi R$:${totalCompra}`)
                break;
                
                case 2:
                let unidadeSorvete = Number(prompt("Quantos Sorvete voce gostaria de comprar?"))
                let totalCompra1 = unidadeSorvete * 12
                alert(`O valor do sorvete foi R$:${totalCompra1}`)
                break;

                case 3:
                let unidadeBolo = Number(prompt("Quantos Bolo voce gostaria de comprar?"))
                let totalCompra2 = unidadeBolo * 20
                alert(`O valor do bolo ficou R$:${totalCompra2}`)
                break;

                case 4:
                let unidadeBrigadeiro = Number(prompt("Quantos Brigadeiros voce gostaria de comprar?"))
                let totalCompra3 = unidadeBrigadeiro * 4
                alert(`O valor do brigadeiro ficou R$:${totalCompra3}`)
                break;
        
            default:
                break;
        }
}

