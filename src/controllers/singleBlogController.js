import { ObjectId } from "mongodb";
import { client } from "../db/mongo.config.js";

export const singleBlogGetter = async (req, res) => {

  const result = await client
    .db("wordify-blog")
    .collection("blogs")
    .findOne({ _id: new ObjectId(req.params?.id) });
    
  res.send(result);
};
