

const opiniones = document.querySelectorAll(".opinion");
const indices = document.querySelectorAll(".indice");
const btnIzq = document.getElementById("btn-izq");
const btnDer = document.getElementById("btn-der");

btnIzq.addEventListener("click", () => {
    moverIzquierda()
})

function moverIzquierda() {
    let siguiente;
    opiniones.forEach((item, indice) => {
        if (item.classList.contains("active")) {
            siguiente = indice;
            if (indice - 1 == -1) {
                siguiente = opiniones.length - 1;
            }
            else {
                siguiente--;
            }
            item.classList.remove("active");
            indices[indice].classList.remove("active")
        }
    })
    opiniones[siguiente].classList.add("active");
    indices[siguiente].classList.add("active");
}

btnDer.addEventListener("click", () => {
    moverDerecha()
})

function moverDerecha() {
    let siguiente;
    opiniones.forEach((item, indice) => {
        if (item.classList.contains("active")) {
            siguiente = indice;
            if (indice + 1 == opiniones.length) {
                siguiente = 0;
            }
            else {
                siguiente++;
            }
            item.classList.remove("active");
            indices[indice].classList.remove("active")
        }
    })
    opiniones[siguiente].classList.add("active");
    indices[siguiente].classList.add("active");
}