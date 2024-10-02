import express from "express";
import moviesRouter from "./router/movies.router.js";    
import connectDB from "./lib/db.js";

const app = express();
const PORT = 8000;


connectDB();


app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "Hello Students!" });

})

// crud functionality for papa
app.use("/movies",moviesRouter);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);

})