import { client } from "../db/mongo.config.js"

export const blogController = async (req, res)  => {
    const blogs = await client.db("wordify-blog").collection("blogs").find().toArray();
    res.send(blogs)
}