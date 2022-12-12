"use strict";
const page = document.querySelector("body");
if (page) {
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
}
