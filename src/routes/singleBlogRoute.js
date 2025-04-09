import express from "express";
import { singleBlogAdder, singleBlogGetter, singleBlogUpdater } from "../controllers/singleBlogController.js";

const singleBlogRouter = express.Router();

singleBlogRouter
  .route("/blogs/blog-details/:id")
  .all((req, res, next) => {
    next();
  })
  .get(singleBlogGetter)
  .post(singleBlogAdder)
  .put(singleBlogUpdater);

export default singleBlogRouter;
