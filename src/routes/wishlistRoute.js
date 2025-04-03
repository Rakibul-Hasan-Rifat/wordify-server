import express from "express";
import {
  wishlistGet,
  wishlistPost,
  singleWishlistItemGet,
} from "../controllers/wishlistController.js";

const wishlistRouter = express.Router();

wishlistRouter
  .route("/wish-list/:email")
  .all((req, res, next) => {
    next();
  })
  .get(wishlistGet)
  .post(wishlistPost);

wishlistRouter
  .route("/blogs/wish-list/:id")
  .all((req, res, next) => {
    console.log('wishlist single router');
    next();
  })
  .get(singleWishlistItemGet);

export default wishlistRouter;
