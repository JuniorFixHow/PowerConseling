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
    },
    body:{
        type:String,
        required:true
    },
    hasRead:{
        type:Boolean,
        default:false
    },
},{timestamps:true});

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

export default Message;
