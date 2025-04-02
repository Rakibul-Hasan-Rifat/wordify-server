import { client } from "../db/mongo.config.js";

export const wishlistController = async (req, res) => {
  console.log(req.body);

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

      res.send(result)
  }

  //   const result = await client
  //     .db("wordify-blog")
  //     .collection("wish-list")
  //     .insertOne(req.body);

  //   res.send(result);
};
