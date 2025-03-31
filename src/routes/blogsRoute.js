import express from 'express'
import { blogController } from '../controllers/blogController.js';

const blogsRouter = express.Router();

blogsRouter.get('/blogs', blogController)

export default blogsRouter;