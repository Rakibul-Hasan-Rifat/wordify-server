import express from 'express'
import { blogController } from '../controllers/blogController.js';

export const blogsRouter = express.Router();

blogsRouter.get('/blogs', blogController)

