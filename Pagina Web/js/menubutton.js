"use strict";

console.log("Test");
let formulario = document.querySelector("#formSugerencias");
formulario.addEventListener("submit",enviarSugerencia);

function enviarSugerencia(e) {
    e.preventDefault();
    let form = new FormData(formulario);
    let nombre = form.get("nombre");
    let sugerencia = form.get("sugerencia");
    let mensaje = document.querySelector("#mensajeForm");
    mensaje.innerHTML = `Hola, ${nombre}. Su sugerencia ha sido recibida y sera evaluada.`;
}