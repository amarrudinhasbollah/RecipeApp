import express from "express";

import { createRecipe, deleteRecipe, getRecipes, updateRecipe } from "../controllers/recipe.js";

const router = express.Router(); // Router handles requests

// No need to specify the directory for each operation, handled by the server
router.get("/", getRecipes); // Homepage
router.post("/", createRecipe); // All Recipes Page
router.put("/:id", updateRecipe); // Update a Recipe
router.delete("/:id", deleteRecipe); // Delete a Recipe

export default router;