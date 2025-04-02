import { client } from "../db/mongo.config.js";

export const searchController = async (req, res) => {
  const searchQuery = req.query?.title || "";
  const categoryQuery = req.query?.category || "";

  const searchResult = await client
    .db("wordify-blog")
    .collection("blogs")
    .find({
      title: { $regex: searchQuery, $options: "i" },
      category: categoryQuery,
    })
    .toArray();

  res.send(searchResult);
};
