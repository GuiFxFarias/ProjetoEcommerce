const page = document.querySelector("body")

if (page){

    const btnOC = page.querySelector(".btn-OC") as HTMLButtonElement
    const menuBar = page.querySelector(".itensClosed") as HTMLDivElement
    const itensBought = page.querySelector(".boughtItens") as HTMLDivElement
    const btn = page.querySelector(".btn") as HTMLButtonElement

    btn.addEventListener("click", (e) =>{
        e.preventDefault()

        menuBar.classList.toggle("close")
        itensBought.classList.toggle("open")
    })


    btnOC.addEventListener("click", (e) =>{
        e.preventDefault()

        menuBar.classList.toggle("close")
        itensBought.classList.toggle("open")
    })

}