import express from 'express'
import jwtController from '../controllers/jwtController.js';

const jwtRouter = express.Router();

jwtRouter.post("/jwt", jwtController)

export default jwtRouter; 