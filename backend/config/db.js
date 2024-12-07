import mongoose  from "mongoose";

export const connectRecipeDB = async() => {
    try {
        // Connecting to the Recipe DB
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB Recipe: ${con.connection.host}`);
    } catch (error) {
        console.log(`Error while connecting to MongoDB Recipe: ${error.message}`);
        process.exit(1); // Process code 1: exit with failure, 0: success
    }
}