import { client } from "../db/mongo.config.js";

export const featuredBlogController = async (req, res) => {
  const allBlogs = await client
    .db("wordify-blog")
    .collection("blogs")
    .find({})
    .toArray();

  const topBlogs = allBlogs
    .map((blog) => ({
      ...blog,
      blogLength: blog.description ? blog.description.length : 0,
    }))
    .sort((prev, next) => next.blogLength - prev.blogLength)
    .slice(0, 10);

    res.send(topBlogs)
};
