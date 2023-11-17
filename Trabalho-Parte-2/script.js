document.addEventListener("DOMContentLoaded", function () {
    const imoveis = JSON.parse(localStorage.getItem("imoveis")) || [];

    function salvarImoveis() {
        localStorage.setItem("imoveis", JSON.stringify(imoveis));
    }

    // Função para exibir os imóveis na página principal
    function exibirImoveis() {
        const mainElement = document.querySelector("main");
        mainElement.innerHTML = "";

        if (imoveis.length === 0) {
            const mensagemElement = document.createElement("p");
            mensagemElement.textContent = "Nenhum imóvel cadastrado.";
            mainElement.appendChild(mensagemElement);
        } else {
            imoveis.forEach(function (imovel, index) {
                const divItem = document.createElement("div");
                divItem.classList.add("item");
                
                const divSubitem = document.createElement("div");
                divSubitem.classList.add("subitem");
                
                const h2Titulo = document.createElement("h2");
                h2Titulo.textContent = imovel.location;
                
                const breakLine = document.createElement("br")
                
                const pDescricao = document.createElement("p");
                pDescricao.innerHTML = `<small><b>${imovel.description}</b></small>`;
                
                divSubitem.appendChild(h2Titulo);
                divSubitem.appendChild(breakLine);
                divSubitem.appendChild(pDescricao);
                
                const divSubitem2 = document.createElement("div");
                divSubitem2.classList.add("subitem2");
                
                const h2Preco = document.createElement("h2");
                h2Preco.textContent = `R$ ${imovel.price}`;
                
                const aSaibaMais = document.createElement("a");
                aSaibaMais.href = "#";
                aSaibaMais.classList.add("button");
                aSaibaMais.textContent = "Saiba mais";
                
                const btnRemover = document.createElement("button");
                btnRemover.classList.add("button-remove");
                btnRemover.textContent = "Remover";
                btnRemover.addEventListener("click", function () {
                    removerImovel(index);
                });
                
                divSubitem2.appendChild(h2Preco);
                divSubitem2.appendChild(btnRemover);
                
                divItem.appendChild(divSubitem);
                divItem.appendChild(divSubitem2);
                
                mainElement.appendChild(divItem);
            });
        }
    }
    function removerImovel(index) {
        imoveis.splice(index, 1);
        salvarImoveis();
        exibirImoveis();
    }

    exibirImoveis();
});
