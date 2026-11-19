import express from "express";
import cookieParser from "cookie-parser";
import { notaRouter } from "./routes/nota.routes.js";
import { manejarError, rutaNoEncontrada } from "./middlewares/error.middleware.js";

const API_VERSION = "1.0.0";
const app = express();

app.use(express.json());
app.use(cookieParser());

// Middleware para añadir la versión en los headers de las respuestas
app.use((req, res, next) => {
  res.set("X-API-Version", API_VERSION);
  next();
});

// Ruta de estado
app.get("/health", (req, res) => {
  res.status(200).json({ estado: "ok", version: API_VERSION });
});

// Ruta para obtener la última categoría guardada en cookies
app.get("/api/v1/preferencia", (req, res) => {
  res.json({ ultimaCategoria: req.cookies.ultimaCategoria ?? null });
});

// Rutas principales de la API
app.use("/api/v1/notas", notaRouter);

// Middlewares de manejo de errores y rutas no encontradas
app.use(rutaNoEncontrada);
app.use(manejarError);

export default app;