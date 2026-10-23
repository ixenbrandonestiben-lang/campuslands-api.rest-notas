import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "campus2023",
  password: "campus2023", // Coloca tu contraseña de MySQL
  database: "api_notas_clase",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});