import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js';

mongoose.connect(process.env.MONGO).then( () => {
    console.log("MongoDB is connected");
    
}).catch(err => {
    console.log(err);
    
})

const app = express();
app.listen(3000, () => {
    console.log("server is listening on port 3000 !");
    
})
app.use("/api/user", userRouter);