const { Pool } = require('pg');
require('dotenv').config(); // Esto lee el archivo .env

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const verificarConexion = async () => {
  try {
    const client = await pool.connect();
    console.log("✅ ¡Conexión exitosa a prueba_db!");
    client.release();
  } catch (err) {
    console.error("❌ Error al conectar:");
    console.error(err.message);
  } finally {
    await pool.end();
  }
};

verificarConexion();