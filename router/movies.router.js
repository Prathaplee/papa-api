import express from "express";

const router = express.Router();

// R- For Reading
router.get("/", (req, res) => {
    res.send("Get All Movies List");
});
// C- For Creating
router.post("/", (req, res) => {
    res.send("Create a movie");

});
// U- For Updating Movie
router.put("/:id", (req, res) => {
    res.send("Update a movie");

});
// D -For Deleting Movie
router.delete("/:id", (req, res) => {
    res.send("Delete a movie");

});

export default router;