import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

const app = express();
dotenv.config()

const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

app.use(cors())
app.use(json())

app.get('/', (req, res) => {
  return res.json({message: 'All Fine'})
})

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.0a7sm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );
    app
      .listen(PORT, () => console.log("Start bddd"))
      .on("error", (err) => {
        if (err.code === "EADDRINUSE") {
          console.error("Port 3002 is already in use");
          // Можно автоматически попробовать другой порт
          app.listen(3003, () => {
            console.log("Server started on random available port");
          });
        }
      });
  } catch (error) {
    console.log(error);
  }
}
start()
