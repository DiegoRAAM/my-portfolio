let nombre = "Diego";
let profesion = "Desarrollador Web";

document.querySelector("h1").textContent = nombre;
document.querySelector("main p").textContent = profesion;

document.querySelector("#inicio a").addEventListener("click", function() {
    alert("Gracias por contactarme, Diego");
});

document.querySelector("#menu-btn").addEventListener("click", function () {
    document.querySelector("header nav").classList.toggle("activo");
});

document.querySelector("#formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let nombre = document.querySelector("#campo-nombre").value;
    let email = document.querySelector("#campo-email").value;
    let mensaje = document.querySelector("#campo-mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        document.querySelector("#respuesta").textContent = "Por favor completa todos los campos.";
        document.querySelector("#respuesta").style.color = "#e94560";
    }

    else {
        document.querySelector("#respuesta").textContent = "Gracias " + nombre + ", te contactaré pronto.";
        document.querySelector("#respuesta").style.color = "#1a1a2e";
    }
})

document.querySelector(".grid-proyectos").style.display