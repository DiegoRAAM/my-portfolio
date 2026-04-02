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

document.querySelector("#chat-enviar").addEventListener("click", async function() {
    let pregunta = document.querySelector("#chat-pregunta").value;
    
    if (pregunta === "") return;

    agregarMensaje(pregunta, "usuario");
    document.querySelector("#chat-pregunta").value = "";

    let respuesta = await preguntarIA(pregunta);
    agregarMensaje(respuesta, "asistente");
});

function agregarMensaje(texto, tipo) {
    let mensajes = document.querySelector("#chat-mensajes");
    let mensaje = document.createElement("div");
    mensaje.textContent = texto;
    mensaje.style.padding = "10px 14px";
    mensaje.style.borderRadius = "8px";
    mensaje.style.maxWidth = "80%";
    
    if (tipo === "usuario") {
        mensaje.style.backgroundColor = "#e94560";
        mensaje.style.color = "white";
        mensaje.style.alignSelf = "flex-end";
    } else {
        mensaje.style.backgroundColor = "#f0f0f0";
        mensaje.style.color = "#333";
        mensaje.style.alignSelf = "flex-start";
    }
    
    mensajes.appendChild(mensaje);
    mensajes.scrollTop = mensajes.scrollHeight;
}

async function preguntarIA(pregunta) {
    try {
        let respuesta = await fetch("http://localhost:3000/preguntar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pregunta: pregunta })
        });

        let data = await respuesta.json();
        return data.respuesta;
    } catch (error) {
        return "Lo siento, hubo un error al conectar con la IA.";
    }
}