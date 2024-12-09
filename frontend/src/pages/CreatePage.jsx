import React, { useState } from 'react'
import '../stylesheet/CreatePage.css';
import { useRecipeStore } from '../store/recipe';

const CreatePage = () => {
  const [newRecipe, setNewRecipe] = useState({
    username: "default",
    title: "",
    steps: "",
    photo: ""
  });

  const {createRecipe} = useRecipeStore();

  const handleRecipeAdd = async () => {
    const { success, message } = await createRecipe(newRecipe);
    console.log("Sucess:", success);
    console.log("Message:", message);
  }

  return (
    <div class="container" margin-top>
      <h1> Write a Recipe </h1>

        <div class="form-group">
          <label for="title">Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Title of Recipe"
            value={newRecipe.title}
            onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
          />
        </div>

        <div class="form-group">
          <label for="body">Recipe</label>
          <textarea
            type="text"
            class="form-control"
            placeholder="Recipe Steps"
            value={newRecipe.steps}
            onChange={(e) => setNewRecipe({ ...newRecipe, steps: e.target.value })}
          />
        </div>

        <div class="form-group">
          <label for="photo">Photo</label>
          <input
            type="text"
            class="form-control"
            placeholder="Photo URL of Foods"
            value={newRecipe.photo}
            onChange={(e) => setNewRecipe({ ...newRecipe, photo: e.target.value })}
          />
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleRecipeAdd} w="full">
          Finish Writing
        </button>
      
    </div>
  )
}

export default CreatePage