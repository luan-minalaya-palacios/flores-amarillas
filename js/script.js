/* =========================================================
   BOTONES
========================================================= */

const botonComenzar =
    document.getElementById("btnComenzar");

const botonRecuerdo =
    document.getElementById("btnRecuerdo");

const botonFotos =
    document.getElementById("btnFotos");

const botonMensaje =
    document.getElementById("btnMensaje");

const botonEspecial =
    document.getElementById("btnEspecial");

const botonFinal =
    document.getElementById("btnFinal");

const botonMensajeFinal =
    document.getElementById("btnMensajeFinal");

const botonInicio =
    document.getElementById("btnInicio");



/* =========================================================
   PORTADA → JARDÍN
========================================================= */

botonComenzar.addEventListener("click", () => {

    document
        .getElementById("semilla")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =========================================================
   JARDÍN → VIDEO
========================================================= */

botonRecuerdo.addEventListener("click", () => {

    document
        .getElementById("recuerdo")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =========================================================
   VIDEO → FOTOS
========================================================= */

botonFotos.addEventListener("click", () => {

    document
        .getElementById("fotos")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =========================================================
   FOTOS → CARTA
========================================================= */

botonMensaje.addEventListener("click", () => {

    document
        .getElementById("mensaje")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =========================================================
   CARTA → MOMENTO ESPECIAL
========================================================= */

botonEspecial.addEventListener("click", () => {

    document
        .getElementById("especial")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =========================================================
   MOMENTO ESPECIAL → JARDÍN FINAL
========================================================= */

botonFinal.addEventListener("click", () => {

    document
        .getElementById("final-jardin")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =========================================================
   JARDÍN FINAL → MENSAJE FINAL
========================================================= */

botonMensajeFinal.addEventListener("click", () => {

    document
        .getElementById("mensaje-final")
        .scrollIntoView({
            behavior: "smooth"
        });

});



/* =========================================================
   MENSAJE FINAL → INICIO
========================================================= */

botonInicio.addEventListener("click", () => {

    document
        .getElementById("portada")
        .scrollIntoView({
            behavior: "smooth"
        });

});
