import express from "express";
import { singleBlogGetter, singleBlogUpdater } from "../controllers/singleBlogController.js";

const singleBlogRouter = express.Router();

singleBlogRouter
  .route("/blogs/blog-details/:id")
  .all((req, res, next) => {
    next();
  })
  .get(singleBlogGetter)
  .put(singleBlogUpdater);

export default singleBlogRouter;
