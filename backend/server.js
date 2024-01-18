import express from "express";
import { PORT } from "./config.js";
import mongoose from "mongoose";
import topicsRoute from "./routes/topicsRoute.js";
import questionsRoute from './routes/questionsRoute.js';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();
const mongoDBUrl = process.env.MONGODB_URL;
const app = express(); 

app.use(cors({
    origin: "*",
    methods: "GET",
    allowedHeaders: ['Content-Type']
  }))

app.use(express.json())
app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Working')
})

app.use('/topics', topicsRoute)

app.use('/questions', questionsRoute)

mongoose.connect(mongoDBUrl)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
})
.catch((err) => {
    console.log(err)
})

export default app;
