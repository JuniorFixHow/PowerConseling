import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connecDB } from '../mongoose';
import AcademyRoutes from './routes/AcademyRoutes';

dotenv.config();

const app:Application = express();
app.use(cors())
app.use(express.json());

connecDB();

mongoose.connection.on('connected', ()=>{
    console.log('Mongo is back')
})
mongoose.connection.on('disconnected', ()=>{
    console.log('Mongo is disconnected')
})

app.use('/api/academy', AcademyRoutes);


const PORT = process.env.PORT || 7777;

app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}`);
})
