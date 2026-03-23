import express from "express";
import client from "prom-client"; // Importamos la librería de métricas

const app = express();
const PORT = process.env.PORT || 3000; // Usamos el puerto de Render o el 3000

// --- CONFIGURACIÓN DE MÉTRICAS ---
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

// Tu middleware de log que ya tenías
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// --- NUEVA RUTA PARA GRAFANA ---
// Grafana entrará aquí para leer el uso de CPU y RAM
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// Tu ruta principal
app.get("/", (req, res) => {
  res.send("App funcionando 🚀 - Kryos está vigilando el rendimiento");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
