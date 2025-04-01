import express from 'express'
import { singleBlogController } from '../controllers/singleBlogController.js';

const singleBlogRouter = express.Router();

singleBlogRouter.get('/blogs/blog-details/:id', singleBlogController)

export default singleBlogRouter;