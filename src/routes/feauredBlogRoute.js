import express from "express";
import { featuredBlogController } from "../controllers/featuredBlogController.js";

const featuredBlogRouter = express.Router();

featuredBlogRouter
  .route("/feature-blogs")
  .all((req, res, next) => next())
  .get(featuredBlogController);

export default featuredBlogRouter;
