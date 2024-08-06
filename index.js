const corretora = { criar, listar, remover, atualizar } = require("./modulos/corretora");
const prompt = require("prompt-sync")();

console.log("GERENCIAMENTO DE CORRETORA DE IMÓVEIS");
while (true) {
    console.log(`
    O que deseja gerenciar?
    1 - Corretora
    2 - 
    3 - 
    0 - Sair
    `);
    const escolha = prompt()
    switch (escolha) {
        case "1":
            let continuar = true
            while (continuar) {
            console.log(`
            GERENCIAMENTO DE CORRETORA
            
            1 - Criar
            2 - Listar
            3 - Atualizar
            4 - Remover
            5 - Sair
            `);
            const escolha = prompt()
            switch (escolha) {
                case "1":
                    corretora.criar()
                    break;
                    case "2":
                    corretora.listar()
                    break;
                    case "3":
                        corretora.atualizar()
                        break;
                        case "4":
                            corretora.remover()
                            break;
                            case "5":
                                continuar = false;
                                break;
                                    
            }
                
            }
            break;
    
        default:
            break;
    }
}