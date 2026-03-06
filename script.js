const barras = document.querySelectorAll(".progresso")

function animarSkills(){

barras.forEach(barra => {

const largura = barra.getAttribute("data-width")

barra.style.width = largura

})

}

window.addEventListener("load", animarSkills)
