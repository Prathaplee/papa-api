import express from "express";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.json({ msg: "Hello Students!" });

})
// crud functionality for papa

// R- For Reading
app.get("/movies", () => {

})
// C- For Creating
app.post("/movies", () => {

})
// U- For Updating Movie
app.put("/movies/:id", () => {

})
// D -For Deleting Movie
app.delete("/movies/:id", () => {

})



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);

})