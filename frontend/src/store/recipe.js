import { create } from "zustand";

export const useRecipeStore = create((set) => ({
    recipes: [],
    setRecipes: (recipes) => set({ recipes }),
    createRecipe: async (newRecipe) => {
        console.log("Sending request to create a recipe:", newRecipe); // Log 1
        console.log("New recipe being sent:", JSON.stringify(newRecipe).length, "bytes");


        if (!newRecipe.title || !newRecipe.steps || !newRecipe.photo) {
            return { success: false, message: "Please fill in all fields" };
        }

        const res = await fetch("http://localhost:3000/api/recipes", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(newRecipe),
        })
        // Log 2
        console.log("Request headers:", res.headers);
        console.log("Response status:", res.status);

        const data = await res.json();
        console.log("Response data:", data); // Log 3
        set((state) => ({ recipes: [...state.recipes, data.data] }))
        return { success: true, message: "Recipe written successfully" };
    }
}))