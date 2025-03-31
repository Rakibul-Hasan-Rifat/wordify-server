import { client } from "../db/mongo.config.js";

export const searchController = async (req, res) => {
  const searchQuery = req.query?.text || '';
  
  const searchResult = await client
    .db("wordify-blog")
    .collection("blogs")
    .find({ title: { $regex: searchQuery, $options: "i" } })
    .toArray();

    res.send(searchResult);
};
