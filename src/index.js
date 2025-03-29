import cors from 'cors';
import express from "express";
import { configDotenv } from 'dotenv';
import jwtRouter from "./routes/jwtRoute.js";
import { client } from './db/mongo.config.js';

configDotenv()
const app = express();
const port = process.env.PORT || 4321;

app.use(cors({credentials: true, origin: ['http://localhost:5173']}))
app.use(express.json())
app.use(jwtRouter)

app.get('/', (req, res) => {
    res.send('The server is running!')
})
app.listen(port, async () => {
    console.log(`The server is running at http://localhost:${port}`);
    console.log(process.env.MONGODB_URI);
    try {
        await client.connect()
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.log(error);
    }
})