import { client } from "../db/mongo.config.js";

export const uniqueCategoryController = async (req, res) => {
  const categories = await client
    .db("wordify-blog")
    .collection("blogs")
    .find({})
    .project({ category: 1, _id: 0 })
    .toArray();

  const uniqueCategories = [];

  categories.forEach((categoryObj) => {
    !uniqueCategories.includes(categoryObj.category) &&
      uniqueCategories.push(categoryObj.category);
  });

  res.send(uniqueCategories);
};
