import mongoose from "mongoose";
import Recipe from "../models/recipe.js";

export const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({}); // Empty method means it fetches all
        res.status(200).json({ success: true, data: recipes });
    } catch (error) {
        console.log("Error in retrieving data: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" })
    }
};

export const createRecipe = async (req, res) => {
    const recipe = req.body; // Data to-be-sent to DB

    if (!recipe.title || !recipe.body || !recipe.photo) {
        return res.status(400).json({ success: false, message: "Please provide all fields."});
    }

    const newRecipe = new Recipe(recipe);

    try {
        await newRecipe.save();
        res.status(201).json({ success: true, data: newRecipe});
    } catch (error) {
        console.error("Error in writing recipe: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const updateRecipe = async (req, res) => {
    const { id } = req.params;

    const recipe = req.body;

    // Handling unknown recipe id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Product Not Found." })
    }

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, recipe, {new: true});
        res.status(200).json({ success: true, data: updatedRecipe });
    } catch {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export const deleteRecipe = async (req, res) => {
    const {id} = req.params;
    
    // Handling unknown recipe id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Product Not Found." })
    }

    try {
        await Recipe.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Recipe Deleted" });
    } catch (error) {
        console.error("Error in deleting product: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};