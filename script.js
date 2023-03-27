
const modoOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#id-icon").setAttribute("class", "icon fa-solid fa-sun fa-lg");
    document.querySelector("#id-toggle").setAttribute("class", "fa-solid fa-toggle-on fa-xl");
    document.getElementById("text-mode").innerHTML = "Modo Claro"
}
const modoClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#id-icon").setAttribute("class", "icon fa-solid fa-moon fa-lg");
    document.querySelector("#id-toggle").setAttribute("class", "fa-solid fa-toggle-off fa-xl tran-act");
    document.getElementById("text-mode").innerHTML = "Modo Oscuro"
}

const cambiarTema = function (theme) {
    const body = document.querySelector("body");


    //agregamos la clase
    body.classList.add("transicion");


    //quitamos la clase
    setTimeout(() => body.classList.remove("transicion"), 650);

    body.getAttribute("data-bs-theme") === "light" ?
        modoOscuro() : modoClaro();
}
