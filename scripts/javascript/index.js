"use strict";
const page = document.querySelector("body");
if (page) {
    // Criando funcionalidade do 'menu-mobile'
    const btnOC = page.querySelector(".btn-OC");
    const menuBar = page.querySelector(".itensClosed");
    const itensBought = page.querySelector(".boughtItens");
    const btn = page.querySelector(".btn");
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        menuBar.classList.toggle("close");
        itensBought.classList.toggle("open");
    });
    btnOC.addEventListener("click", (e) => {
        e.preventDefault();
        menuBar.classList.toggle("close");
        itensBought.classList.toggle("open");
    });
    // Encerrado 'menu-mobile'. Stts: !! Funcionando !!
    // Adicionando Itens no Carrinho
    const btnImage = page.querySelectorAll(".btn-image");
    const item = page.querySelectorAll(".item");
    const imageItem = page.querySelectorAll('.listItens img');
    let listItens = [];
    btnImage.forEach((buttons) => {
        const buttonsImage = buttons.querySelector("li");
        buttonsImage.addEventListener("click", (e) => {
            e.preventDefault();
            const element = e.target;
            if (element.value) {
                listItens.push(element.value);
            }
        });
    });
    // Em progresso 'carrinho'. Stts: !! Em construção !!
}
