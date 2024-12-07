import express from "express";
import dotenv from "dotenv";
import { connectRecipeDB } from "./config/db.js";

dotenv.config();

const app = express();

// Server homepage
app.get("/", (req, res) => {
    res.send("Server is ready for development.");
})

// console.log(process.env.MONGO_URI);

app.listen(3000, () => {
    connectRecipeDB();
    console.log("Server started as http://localhost:3000")
})