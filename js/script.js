const botonComenzar =
    document.getElementById("btnComenzar");

const botonRecuerdo =
    document.getElementById("btnRecuerdo");


/* =========================
   BOTÓN COMENZAR
========================= */

botonComenzar.addEventListener("click", () => {

    document
        .getElementById("semilla")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================
   BOTÓN CONTINUAR
========================= */

botonRecuerdo.addEventListener("click", () => {

    alert(
        "Aquí aparecerá nuestro recuerdo especial 💛"
    );

});
