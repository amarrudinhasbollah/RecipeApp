import mongoose  from "mongoose";

const connectRecipeDB = async() => {
    try {
        // Connecting to the Recipe DB
        const dbName = 'recipe';
        const con = await mongoose.connect(`mongodb://localhost:27017/${recipe}`);
        console.log(`Connected to MongoDB Recipe ${con.connection.host}`.bgMagenta.white);
    } 
    catch (error) 
    {
        console.log(`Error while connecting to MongoDB Recipe: ${error}`.byRed.white);
    }
}