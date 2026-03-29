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
