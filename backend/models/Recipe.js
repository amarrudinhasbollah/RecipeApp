import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String, 
        required: true
    }
}, {
    timestamps: true // For the time: createdAt, updatedAt
});

const Recipe = mongoose.model('Recipe', recipeSchema);
// MongoDB automatically uses the document name to write the collection name
// and clarify the data (schema) for each document
// i.e. Recipe -> recipes

export default Recipe;