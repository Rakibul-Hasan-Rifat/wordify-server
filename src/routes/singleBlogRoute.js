import express from "express";
import { singleBlogGetter } from "../controllers/singleBlogController.js";

const singleBlogRouter = express.Router();

singleBlogRouter
  .route("/blogs/blog-details/:id")
  .all((req, res, next) => {
    next();
  })
  .get(singleBlogGetter);

export default singleBlogRouter;
