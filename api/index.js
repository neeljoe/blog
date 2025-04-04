import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'

mongoose.connect(process.env.MONGO).then( () => {
    console.log("MongoDB is connected");  
}).catch(err => {
    console.log(err);   
})
const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use('/api/auth', authRouter);

app.listen(3000, () => {
    console.log("server is listening on port 3000 !");
    
})
