// script_cadastro.js (salve este script separadamente)

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const location = formulario.location.value;
        const bedrooms = formulario.bedrooms.value;
        const bathrooms = formulario.bathrooms.value;
        const totalArea = formulario.totalArea.value;
        const price = formulario.price.value;
        const description = formulario.description.value;

        const novoImovel = {
            location: location,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            totalArea: totalArea,
            price: price,
            description: description
        };

        // Recuperar os imóveis existentes do localStorage
        const imoveis = JSON.parse(localStorage.getItem("imoveis")) || [];

        // Adicionar o novo imóvel
        imoveis.push(novoImovel);

        // Atualizar o localStorage com os imóveis atualizados
        localStorage.setItem("imoveis", JSON.stringify(imoveis));

        // Redirecionar para a página principal (index.html)
        window.location.href = "index.html";
    });
});
