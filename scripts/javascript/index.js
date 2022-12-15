"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page = document.querySelector("body");
if (page) {
    // Criando funcionalidade do 'menu-mobile'
    const btnOC = page.querySelector(".btn-OC");
    const menuBar = page.querySelector(".itensClosed");
    const itensBought = page.querySelector(".boughtItens");
    const btn = page.querySelector(".btn");
    const renderAdd = () => {
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
    };
    // Encerrado 'menu-mobile'. Stts: !! Funcionando !!
    // Adicionando Itens no Carrinho
    const listItens = [
        {
            id: 1,
            name: "Gotenks Super Sayajin 3",
            description: "Dragon Ball Z",
            lenght: 1,
            price: 40,
        },
        {
            id: 2,
            name: "Baby Goku",
            description: "Dragon Ball Z",
            lenght: 1,
            price: 40,
        },
        {
            id: 3,
            name: "One Piece Personagens",
            description: "One Piece",
            lenght: 1,
            price: 40,
        },
    ];
    let selectedItens = [];
    let lengthItens = [];
    const buyButton = page.querySelector(".buyButton");
    const boughtItens = page.querySelector(".itensBought");
    const itensEl = page.querySelector(".itensName");
    const renderItensEl = () => {
        itensEl.innerHTML = "";
        buyButton.innerHTML = "";
        listItens.forEach((item) => {
            const text = document.createElement("button");
            const li = document.createElement("li");
            li.innerHTML = `
      <li class="buy"><button value="${item.id}">Adicione ao Carrinho</button></li>
      `;
            text.innerHTML = `
      <li class="itemName">${item.name} - <strong>${item.description}</strong> - R$ ${item.price}</li>
      `;
            const button = li.querySelector("button");
            button.addEventListener("click", (e) => {
                e.preventDefault();
                boughtItens.innerHTML = "";
                const element = e.target;
                lengthItens.push(item.lenght);
                const itens = lengthItens.find((qtd) => {
                    return qtd === item.lenght;
                });
                const liB = document.createElement("li");
                let count = 0;
                let i = 0;
                if (item.lenght > 5) {
                    window.alert("Só são permitidos 5 itens por compra");
                }
                else if (itens) {
                    count = item.lenght++;
                    liB.innerHTML = `
            <li class="itemBought" value="${i++}"><strong>${item.name}</strong> - R$ ${item.price} <select><option>${count}</option></select></li>
            `;
                }
                boughtItens.appendChild(liB);
            });
            buyButton.appendChild(li);
            itensEl.appendChild(text);
        });
    };
    const render = () => {
        renderItensEl();
        renderAdd();
    };
    render();
    // Em progresso 'carrinho'. Stts: !! Em construção !!
}
