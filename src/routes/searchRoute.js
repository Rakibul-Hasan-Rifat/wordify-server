import express from "express";
import { searchController } from "../controllers/searchController.js";

const searchRouter = express.Router();

searchRouter.get('/search-blogs', searchController)

export default searchRouter;