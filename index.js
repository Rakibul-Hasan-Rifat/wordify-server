import cors from "cors";
import express from "express";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";

import { client } from "./src/db/mongo.config.js";
import jwtRouter from "./src/routes/jwtRoute.js";
import blogsRouter from "./src/routes/blogsRoute.js";
import searchRouter from "./src/routes/searchRoute.js";
import wishlistRouter from "./src/routes/wishlistRoute.js";
import singleBlogRouter from "./src/routes/singleBlogRoute.js";
import featuredBlogRouter from "./src/routes/feauredBlogRoute.js";
import uniqueCategoryRouter from "./src/routes/uniqueCategoryRoute.js";

configDotenv();
const app = express();
const port = process.env.PORT || 4321;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "https://wordify-client.web.app"],
  })
);
app.use(express.json());
app.use(cookieParser());

app.use(jwtRouter);
app.use(blogsRouter);
app.use(searchRouter);
app.use(wishlistRouter);
app.use(singleBlogRouter);
app.use(featuredBlogRouter);
app.use(uniqueCategoryRouter);

app.get("/", (req, res) => {
  res.send("The server is running!");
});
app.listen(port, async () => {
  console.log(`The server is running at http://localhost:${port}`);
  console.log(process.env.MONGODB_URI);
  try {
    await client.connect();
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log(error);
  }
});
