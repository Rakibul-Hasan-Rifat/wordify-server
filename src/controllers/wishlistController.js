import { ObjectId } from "mongodb";
import { client } from "../db/mongo.config.js";

export const wishlistGet = async (req, res) => {
  const { email } = req.params;
  const wishlists = await client
    .db("wordify-blog")
    .collection("wish-list")
    .findOne({ userEmail: email }, { projection: { _id: 0 } });

  res.send(wishlists);
};

export const singleWishlistItemGet = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  const wishlistItem = await client
    .db("wordify-blog")
    .collection("blogs")
    .findOne(
      { _id: new ObjectId(id) },
      { projection: { url: 1, title: 1, category: 1, price: 1 } }
    );

  console.log(id, wishlistItem);

  res.send(wishlistItem);
};

export const wishlistPost = async (req, res) => {

  const { email, blogId } = req.body;

  const doesExist = await client
    .db("wordify-blog")
    .collection("wish-list")
    .findOne({ userEmail: email });

  if (doesExist) {
    const result = await client
      .db("wordify-blog")
      .collection("wish-list")
      .updateOne(
        { userEmail: email },
        { $set: { blogIds: [...doesExist.blogIds, blogId] } }
      );

    res.send(result);
  }

  if (!doesExist) {
    const result = await client
      .db("wordify-blog")
      .collection("wish-list")
      .insertOne({ userEmail: email, blogIds: [blogId] });

    res.send(result);
  }
};
