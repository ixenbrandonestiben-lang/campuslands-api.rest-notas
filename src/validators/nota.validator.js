import { body, param, validationResult } from "express-validator";

const responderErrores = (req, res, next) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  next();
};

export const validarCrearNota = [
  body("titulo").trim().isLength({ min: 3, max: 60 })
    .withMessage("El título debe tener entre 3 y 60 caracteres"),
  body("contenido").trim().isLength({ min: 1, max: 280 })
    .withMessage("El contenido debe tener entre 1 y 280 caracteres"),
  body("categoria").isIn(["clase", "tarea", "idea"])
    .withMessage("Categoría no válida"),
  responderErrores,
];