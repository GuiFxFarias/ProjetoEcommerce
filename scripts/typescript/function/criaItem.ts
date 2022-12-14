// funcao generica:
// criar interface para entityList, eliminar os evals

import { AnyObject } from "../types/anyObject";
import { formatCurrency } from "./formatCurrency";

export function criaItens(
  entityList: AnyObject[],
  entityDisplayEl: HTMLElement,
  entityDisplayElsType: string,
  innerHTML: string,
  props: Object
) {
  // console.log("Criar Itens:", entityList)

  entityDisplayEl.innerHTML = "";
  let editedInnerHTML = "";

  entityList.forEach((entity) => {
    Object.keys(entity).forEach((key) => {
      if (key == "price") {
        // console.log("has price")
        entity[key] = formatCurrency(entity[key]);
      }
    });

    editedInnerHTML = innerHTML;
    for (const prop in props) {
      // console.log(eval("props[prop]"))
      // console.log(eval(entity.${eval("props[prop]")}))

      editedInnerHTML = editedInnerHTML.replaceAll(
        prop,
        entity[`${eval("props[prop]")}`]
      );
    }
    // console.log(editedInnerHTML)

    // Trabalha o elemento do DOM a ser configurado

    const element = window.document.createElement(entityDisplayElsType);
    element.innerHTML = editedInnerHTML;
    entityDisplayEl.appendChild(element);
  });
}
