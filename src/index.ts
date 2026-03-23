import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("App funcionando 🚀");
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
