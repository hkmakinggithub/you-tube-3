// index.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js'; // Assuming your routes are in user.js
import http from 'http';

dotenv.config();

const app = express();
app.use(cors(true));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello, World!");
});

app.use('/user', userRoutes);

const PORT = process.env.PORT || 4000;
const DB_URL = process.env.CONNECTION_URL;

mongoose.connect(DB_URL)
.then(() => {
    console.log("Mongoose database connected");

    const server = http.createServer(app);

    server.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });


})
.catch((error) => {
    console.error("Error connecting to the database", error);
});

export default app;
