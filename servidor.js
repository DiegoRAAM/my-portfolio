const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const API_KEY = "";

app.post("/preguntar", async (req, res) => {
    const { pregunta } = req.body;
    try {
        const respuesta = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": API_KEY,
                "anthropic-version": "2023-06-01"
            },
            body: JSON.stringify({
                model: "claude-haiku-4-5-20251001",
                max_tokens: 300,
                system: "Eres un asistente que responde preguntas sobre Diego Ramirez,  desarrollador web en formación. Es de México, está aprendiendo HTML, CSS y JavaScript. Es estudiante de ingeniería en desarrollo de software. Responde siempre en español y de forma breve.",
                messages: [
                    {role: "user", content: pregunta }
                ]
            })
        });

        const data = await respuesta.json();
        res.json({ respuesta: data.content[0].text });

        } catch (error) {
            res.json({ respuesta: "Error al conectar con la IA." });
        }

    });

    app.listen(3000, () => {
        console.log("Servidor corriendo en puerto 3000");
    });
