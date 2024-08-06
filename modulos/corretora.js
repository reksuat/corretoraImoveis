const prompt = require("prompt-sync")();
const corretoras = [];

let ultimoId = 0;

function getIndice(id) {
    if (listar()) {
        id = prompt("Digite o ID: ");
        let indice = corretoras.findIndex((element)=>element.id == id)
        if (indice != -1) {
            
        } else {
            console.log("ID inválido.");
        }
    }
}
function modelo(id = ++ultimoId) {
    const nome = prompt("Digite o nome: ");
    if (nome != "") {
        return {
            id,
            nome
        }
    }
    console.log("Dados inválidos.");
}
function criar() {
    const novo = modelo();
    if (novo) {
        corretoras.push(novo);
        console.log("Registro criado.");
    }
}
function listar() {
    if (corretoras.length > 0) {
        corretoras.forEach(element => {
            console.log(element);
        });
        return true
    }else{
        console.log("Nenhum registro encontrado.");
        return false
    }
}
function atualizar() {
    if (listar()) {
        const id = + prompt("Digite o ID: ");
        const indice = getIndice(id)
        if (indice !== -1) {
            const novo = modelo(id)
            if (novo) {
                corretoras[indice] = novo
                console.log("Atualizado com sucesso.");
            }
        }
    } 
}
function remover() {
    if (listar) {
        const id = +prompt("Digite o ID: ")

        const indice= getIndice(id);
        if (indice) {
            corretoras.splice(indice,1);
            console.log("Removido com sucesso.");
        }
    }
}
module.exports = {
    criar,
    listar,
    remover,
    atualizar
}