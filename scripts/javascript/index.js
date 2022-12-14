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
    const buyButton = page.querySelector(".buyButton");
    const boughtItens = page.querySelector(".itensBought");
    const renderAddItens = () => {
        boughtItens.innerHTML = "";
        selectedItens.forEach((id) => {
            const itens = listItens.find((item) => {
                return item.id == id;
            });
            if (itens) {
                const li = document.createElement("li");
                li.innerHTML = `
        <li class="itemBought"><strong>${itens.name}</strong> - R$ ${itens.price}</li>
        `;
                boughtItens.appendChild(li);
            }
        });
    };
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
                const element = e.target;
                const elValue = Number(element.value);
                if (element) {
                    selectedItens.push(Number(element.value));
                }
                else {
                    selectedItens = selectedItens.filter((id) => {
                        return id !== elValue;
                    });
                }
                renderAddItens();
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
