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