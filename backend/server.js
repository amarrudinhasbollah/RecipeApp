import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectRecipeDB } from "./config/db.js";

import recipeRoutes from "./routes/recipe.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json( {limit: "50mb"} )); // Able to accept JSON data in req.body
app.use(bodyParser.urlencoded( {limit: "50mb", extended: true } ))
app.use(bodyParser.json());
console.log(process.env.MONGO_URI);

app.use("/api/recipes", recipeRoutes)

app.listen(PORT, () => {
    connectRecipeDB();
    console.log("Server started as http://localhost:" + PORT);
}); 