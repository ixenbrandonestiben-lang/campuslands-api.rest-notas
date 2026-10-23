import app from "./app.js";
import { pool } from "./config/db.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

try {
  const connection = await pool.getConnection();
  console.log("Conexión exitosa a la base de datos MySQL");
  connection.release();

  app.listen(PORT, () => {
    console.log(`API lista en http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("No fue posible conectar con MySQL:", error.message);
  process.exit(1);
}