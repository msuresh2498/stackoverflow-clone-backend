import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import userRoutes from './Routes/users.js';
import questionsRoutes from './Routes/questions.js'
import { MongoClient } from 'mongodb'


dotenv.config();
const app = express()
app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

const client = new MongoClient(process.env.MONGO_URL);
await client.connect();
app.use('/user', userRoutes);
app.use('/questions', questionsRoutes);
app.get('/', (req, res) => {
    res.send(" Welcome to stackoverflow clone")
})


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server running on PORT ${PORT}`) }))
    .catch((err) => console.log(err.message))
