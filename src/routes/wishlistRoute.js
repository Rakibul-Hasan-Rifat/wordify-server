import express from "express";
import {
  wishlistGet,
  wishlistPost,
  wishlistRemove,
  singleWishlistItemGet,
} from "../controllers/wishlistController.js";

const wishlistRouter = express.Router();

wishlistRouter
  .route("/wish-list/:email")
  .all((req, res, next) => {
    next();
  })
  .get(wishlistGet)
  .post(wishlistPost)
  .delete(wishlistRemove);

wishlistRouter
  .route("/blogs/wish-list/:id")
  .all((req, res, next) => {
    console.log('wishlist single router');
    next();
  })
  .get(singleWishlistItemGet);

export default wishlistRouter;
