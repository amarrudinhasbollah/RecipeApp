import {create} from "zustand";

export const useRecipeStore = create((set) => ({
    recipes: [],
    setRecipes: (recipes) => set({ recipes }),
    createRecipe: async (newRecipe) => {
        if(!newRecipe.title || !newRecipe.body || !newRecipe.photo) {
            return { success: false, message: "Please fill in all fields." }
        }
        const res = await fetch("http://localhost:3000/api/recipes/", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecipe),
        })
        const data = await res.json();
        set((state) => ({recipes: [...state.recipes, data.data] }))
        return { success: true, message: "Recipe written successfully." }
    }
}))