import express from "express";
import { wishlistController } from "../controllers/wishlistController.js";

const wishlistRouter = express.Router();

wishlistRouter
  .route("/wish-list")
  .all((req, res, next) => {
    next();
  })
  .get((req, res) => {})
  .post(wishlistController);

export default wishlistRouter;
