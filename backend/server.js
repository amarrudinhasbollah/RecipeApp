import express from "express";
import dotenv from "dotenv";
import { connectRecipeDB } from "./config/db.js";

import recipeRoutes from "./routes/recipe.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Able to accept JSON data in req.body
// console.log(process.env.MONGO_URI);

app.use("/api/recipes", recipeRoutes)

app.listen(PORT, () => {
    connectRecipeDB();
    console.log("Server started as http://localhost:" + PORT);
});