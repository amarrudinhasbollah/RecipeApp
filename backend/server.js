import express from 'express';
// to use 'import' must change the type to module

const app = express();

// Server homepage
app.get("/", (req, res) => {
    res.send("Server is ready for development." );
})

app.listen(3000, () => {
    console.log("Server started as http://localhost:3000")
})