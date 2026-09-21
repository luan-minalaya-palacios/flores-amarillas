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
   FUNCIÓN DE NAVEGACIÓN
========================================================= */

function irASeccion(id) {

    const seccion =
        document.getElementById(id);


    if (!seccion) {
        return;
    }


    seccion.scrollIntoView({

        behavior: "smooth",

        block: "start"

    });

}



/* =========================================================
   PORTADA → JARDÍN
========================================================= */

if (botonComenzar) {

    botonComenzar.addEventListener(
        "click",
        () => {

            irASeccion("semilla");

        }
    );

}



/* =========================================================
   JARDÍN → VIDEO
========================================================= */

if (botonRecuerdo) {

    botonRecuerdo.addEventListener(
        "click",
        () => {

            irASeccion("recuerdo");

        }
    );

}



/* =========================================================
   VIDEO → FOTOS
========================================================= */

if (botonFotos) {

    botonFotos.addEventListener(
        "click",
        () => {

            irASeccion("fotos");

        }
    );

}



/* =========================================================
   FOTOS → CARTA
========================================================= */

if (botonMensaje) {

    botonMensaje.addEventListener(
        "click",
        () => {

            irASeccion("mensaje");

        }
    );

}



/* =========================================================
   CARTA → MOMENTO ESPECIAL
========================================================= */

if (botonEspecial) {

    botonEspecial.addEventListener(
        "click",
        () => {

            irASeccion("especial");

        }
    );

}



/* =========================================================
   MOMENTO ESPECIAL → JARDÍN FINAL
========================================================= */

if (botonFinal) {

    botonFinal.addEventListener(
        "click",
        () => {

            irASeccion("final-jardin");

        }
    );

}



/* =========================================================
   JARDÍN FINAL → MENSAJE FINAL
========================================================= */

if (botonMensajeFinal) {

    botonMensajeFinal.addEventListener(
        "click",
        () => {

            irASeccion("mensaje-final");

        }
    );

}



/* =========================================================
   MENSAJE FINAL → INICIO
========================================================= */

if (botonInicio) {

    botonInicio.addEventListener(
        "click",
        () => {

            irASeccion("portada");

        }
    );

}



/* =========================================================
   CREAR PÉTALO
========================================================= */

function crearPetalo() {

    const petalo =
        document.createElement("div");


    petalo.classList.add(
        "petalo-flotante"
    );


    const posicion =
        Math.random() * 100;


    const duracion =
        7 + Math.random() * 7;


    const retraso =
        Math.random() * 2;


    const tamaño =
        0.6 + Math.random() * 0.8;


    petalo.style.left =
        posicion + "vw";


    petalo.style.animationDuration =
        duracion + "s";


    petalo.style.animationDelay =
        retraso + "s";


    petalo.style.transform =
        `scale(${tamaño})`;


    document.body.appendChild(
        petalo
    );


    setTimeout(
        () => {

            petalo.remove();

        },
        (duracion + retraso) * 1000 + 500
    );

}



/* =========================================================
   INICIAR PÉTALOS
========================================================= */

setInterval(
    () => {

        crearPetalo();

    },
    1400
);



/* =========================================================
   CREAR PARTÍCULA DE LUZ
========================================================= */

function crearParticula() {

    const particula =
        document.createElement("div");


    particula.classList.add(
        "particula-luz"
    );


    const izquierda =
        5 + Math.random() * 90;


    const arriba =
        20 + Math.random() * 70;


    particula.style.left =
        izquierda + "vw";


    particula.style.top =
        arriba + "vh";


    document.body.appendChild(
        particula
    );


    setTimeout(
        () => {

            particula.remove();

        },
        3000
    );

}



/* =========================================================
   INICIAR PARTÍCULAS
========================================================= */

setInterval(
    () => {

        crearParticula();

    },
    2200
);
