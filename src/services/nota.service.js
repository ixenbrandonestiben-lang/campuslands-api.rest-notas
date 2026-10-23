import { pool } from "../config/db.js";

export const notaService = {
  crear: async (datos) => {
    const { titulo, contenido, categoria } = datos;
    const [result] = await pool.query(
      "INSERT INTO notas (titulo, contenido, categoria) VALUES (?, ?, ?)",
      [titulo, contenido, categoria]
    );
    const [rows] = await pool.query("SELECT * FROM notas WHERE id = ?", [result.insertId]);
    return rows[0];
  },
  
  listar: async () => {
    const [rows] = await pool.query("SELECT * FROM notas ORDER BY createdAt DESC");
    return rows;
  },
  
  buscarPorId: async (id) => {
    const [rows] = await pool.query("SELECT * FROM notas WHERE id = ?", [id]);
    return rows[0] || null;
  },

  avaScript
import { pool } from "../config/db.js";

export const notaService = {
  crear: async (datos) => {
    const { titulo, contenido, categoria } = datos;
    const [result] = await pool.query(
      "INSERT INTO notas (titulo, contenido, categoria) VALUES (?, ?, ?)",
      [titulo, contenido, categoria]
    );
    const [rows] = await pool.query("SELECT * FROM notas WHERE id = ?", [result.insertId]);
    return rows[0];
  },

  listar: async () => {
    const [rows] = await pool.query("SELECT * FROM notas ORDER BY createdAt DESC");
    return rows;
  },

  buscarPorId: async (id) => {
    const [rows] = await pool.query("SELECT * FROM notas WHERE id = ?", [id]);
    return rows[0] || null;
  },

  actualizar: async (id, datos) => {
    const campos = [];
    const valores = [];

    if (datos.titulo !== undefined) {
      campos.push("titulo = ?");
      valores.push(datos.titulo);
    }
    if (datos.contenido !== undefined) {
      campos.push("contenido = ?");
      valores.push(datos.contenido);
    }
    if (datos.categoria !== undefined) {
      campos.push("categoria = ?");
      valores.push(datos.categoria);
    }

    if (campos.length === 0) {
      return await notaService.buscarPorId(id);
    }

    valores.push(id);
    const [result] = await pool.query(
      `UPDATE notas SET ${campos.join(", ")} WHERE id = ?`,
      valores
    );

    if (result.affectedRows === 0) return null;
    return await notaService.buscarPorId(id);
  },