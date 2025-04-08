import { ObjectId } from "mongodb";
import { client } from "../db/mongo.config.js";

export const singleBlogGetter = async (req, res) => {
  const result = await client
    .db("wordify-blog")
    .collection("blogs")
    .findOne({ _id: new ObjectId(req.params?.id) });
  res.send(result);
};

export const singleBlogUpdater = async (req, res) => {
  console.log(req.body);
  const result = await client
    .db("wordify-blog")
    .collection("blogs")
    .updateOne(
      { _id: ObjectId.createFromHexString(req.params?.id) },
      { $set: req.body }
    );

  res.send(result);
};
