import { itemEl } from "./types/item";

const page = document.querySelector("body");

if (page) {
  // Criando funcionalidade do 'menu-mobile'
  const btnOC = page.querySelector(".btn-OC") as HTMLButtonElement;
  const menuBar = page.querySelector(".itensClosed") as HTMLDivElement;
  const itensBought = page.querySelector(".boughtItens") as HTMLDivElement;
  const btn = page.querySelector(".btn") as HTMLButtonElement;

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

  const listItens: itemEl[] = [
    {
      id: 1,
      name: "Gotenks Super Sayajin 3",
      description: "Dragon Ball Z",
      price: 40,
    },
    {
      id: 2,
      name: "Baby Goku",
      description: "Dragon Ball Z",
      price: 40,
    },
    {
      id: 3,
      name: "One Piece Personagens",
      description: "One Piece",
      price: 40,
    },
  ];

  let selectedItens = [] as number[];
  const buyButton = page.querySelector(".buyButton") as HTMLUListElement;
  const boughtItens = page.querySelector(".itensBought") as HTMLUListElement;

  const renderAddItens = () => {
    boughtItens.innerHTML = "";

    selectedItens.forEach((id) => {
      const itens = listItens.find((item) => {
        return item.id == id;
      });

      

      if (itens) {
        const li = document.createElement("li") as HTMLLIElement;

        li.innerHTML = `
        <li class="itemBought"><strong>${itens.name}</strong> - R$ ${itens.price}</li>
        `;

        boughtItens.appendChild(li);
      }
    });
  };
  const itensEl = page.querySelector(".itensName") as HTMLUListElement;

  const renderItensEl = () => {
    itensEl.innerHTML = "";
    buyButton.innerHTML = "";

    listItens.forEach((item) => {
      const text = document.createElement("button") as HTMLButtonElement;
      const li = document.createElement("li") as HTMLLIElement;

      li.innerHTML = `
      <li class="buy"><input type="checkbox" name="buy" id="buy" class="buyBtn" value="${item.id}"></li>
      `;

      text.innerHTML = `
      <li class="itemName">${item.name} - <strong>${item.description}</strong> - R$ ${item.price}</li>
      `;

      const input = li.querySelector("input") as HTMLInputElement;

      input.addEventListener("change", (e) => {
        e.preventDefault();

        const element = e.target as HTMLInputElement;

        if (element.checked) {
          selectedItens.push(Number(element.value));
        } else {
          selectedItens = selectedItens.filter((id) => {
            return id !== Number(element.value);
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
