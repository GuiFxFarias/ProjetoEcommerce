"use strict";
// funcao generica:
// criar interface para entityList, eliminar os evals
Object.defineProperty(exports, "__esModule", { value: true });
exports.criaItens = void 0;
const formatCurrency_1 = require("./formatCurrency");
function criaItens(entityList, entityDisplayEl, entityDisplayElsType, innerHTML, props) {
    // console.log("Criar Itens:", entityList)
    entityDisplayEl.innerHTML = "";
    let editedInnerHTML = "";
    entityList.forEach((entity) => {
        Object.keys(entity).forEach((key) => {
            if (key == "price") {
                // console.log("has price")
                entity[key] = (0, formatCurrency_1.formatCurrency)(entity[key]);
            }
        });
        editedInnerHTML = innerHTML;
        for (const prop in props) {
            // console.log(eval("props[prop]"))
            // console.log(eval(entity.${eval("props[prop]")}))
            editedInnerHTML = editedInnerHTML.replaceAll(prop, entity[`${eval("props[prop]")}`]);
        }
        // console.log(editedInnerHTML)
        // Trabalha o elemento do DOM a ser configurado
        const element = window.document.createElement(entityDisplayElsType);
        element.innerHTML = editedInnerHTML;
        entityDisplayEl.appendChild(element);
    });
}
exports.criaItens = criaItens;
