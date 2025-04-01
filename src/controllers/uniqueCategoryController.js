import { client } from "../db/mongo.config.js";

export const uniqueCategoryController = async (req, res) => {
  const categories = await client
    .db("wordify-blog")
    .runCursorCommand({ distinct: "blogs", key: "category" });
  res.send(categories);
};
