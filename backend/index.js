import express from "express";
import { PORT, mongoDbURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/bookroutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to MERN stack');
});

app.use('/books', booksRoute); 

mongoose
   .connect(mongoDbURL)
   .then(() => {
    console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    })
   .catch((err) => {
    console.log(err);
   });