import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;





let isconnected = false
export const connectDb = async()=>{
    mongoose.set('strictQuery', true);
    if(isconnected){
        console.log('Mongo already connected');
        return
    }
    try {
        await mongoose.connect(MONGO_URL);
        isconnected = true;
        console.log('mongo connected successfully');
    } catch (error) {
        throw new Error('DB failed')
    }
}