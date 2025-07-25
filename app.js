import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/",express.static("public"));



app.use(express.json());








app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT} 🚀`);
});