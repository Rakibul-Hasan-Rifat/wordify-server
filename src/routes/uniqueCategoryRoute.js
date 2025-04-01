import express from "express";
import { uniqueCategoryController } from "../controllers/uniqueCategoryController.js";

const uniqueCategoryRouter = express.Router();

uniqueCategoryRouter.get("/distinct-category", uniqueCategoryController);

export default uniqueCategoryRouter;
