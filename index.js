import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import AcademyRoutes from './routes/AcademyRoutes.js';
import MessageRoutes from './routes/MessageRoutes.js';
import { connectDb } from './mongoose.js';

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());

connectDb();

mongoose.connection.on('connected', ()=>{
    console.log('Mongo is back')
})
mongoose.connection.on('disconnected', ()=>{
    console.log('Mongo is disconnected')
})

app.use('/api/message', MessageRoutes);
app.use('/api/academy', AcademyRoutes);


const PORT = process.env.PORT || 7777;

app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`);
})
