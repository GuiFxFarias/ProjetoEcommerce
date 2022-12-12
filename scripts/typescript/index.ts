const page = document.querySelector("body");

if (page) {
  // Criando funcionalidade do 'menu-mobile'
  const btnOC = page.querySelector(".btn-OC") as HTMLButtonElement;
  const menuBar = page.querySelector(".itensClosed") as HTMLDivElement;
  const itensBought = page.querySelector(".boughtItens") as HTMLDivElement;
  const btn = page.querySelector(".btn") as HTMLButtonElement;

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
  const btnImage = page.querySelectorAll(
    ".btn-image"
  ) as NodeListOf<HTMLElement>;
  const item = page.querySelectorAll(".item") as NodeListOf<HTMLElement>
  const imageItem = page.querySelectorAll('.listItens img') as NodeListOf<HTMLElement>

  let listItens = [] as number[]


  btnImage.forEach((buttons) => {
    const buttonsImage = buttons.querySelector("li") as HTMLLIElement;

    buttonsImage.addEventListener("click", (e) => {
      e.preventDefault()
    
      const element = e.target as HTMLLIElement
      
      if(element.value){
        listItens.push(element.value)
      }
    });
  });


  

  // Em progresso 'carrinho'. Stts: !! Em construção !!
}
