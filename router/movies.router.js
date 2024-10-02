import express from "express";
import {
    MovieIndex,
    MovieCreate,
    MovieUpdate,
    MovieDelete
 }
  from "../controllers/movies.controllers.js";

const router = express.Router();

// R- For Reading
router.get("/", MovieIndex);
// C- For Creating
router.post("/",MovieCreate);
// U- For Updating Movie
router.put("/:id", MovieUpdate);
// D -For Deleting Movie
router.delete("/:id", MovieDelete);

export default router;