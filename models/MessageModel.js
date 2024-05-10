import  mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    fullname:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    interest:{
        type:String,
        required:true
    }
},{timestamps:true});

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

export default Message;
