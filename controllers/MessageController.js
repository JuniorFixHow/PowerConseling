import Message from "../models/MessageModel.js";
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})


transporter.verify((error, success)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('Ready for messages');
        console.log(success);
    }
})

let mailOptions;


export const createAdminMessage = async(req, res) =>{
    try {
            const {email, body, subject} = req.body;
            const newmes = new Message( req.body);
            const savedmes =await newmes.save();
            
            mailOptions = {
                from: process.env.EMAIL,
                to:email,
                subject: subject,
                html: `
                <div >
                <p>
                ${body}</br>
                </p>
                </div>    
                `
            }
            res.status(200).json(savedmes);
            transporter.sendMail(mailOptions, ()=>{
                console.log('Message sent to client')
            })
        
    } catch (error) {
        console.log(error)
    }
}
export const createMessage = async(req, res) =>{
    try {
            const {email, body, subject, fullname} = req.body;
            const newmes = new Message( req.body);
            const savedmes =await newmes.save();
            
            mailOptions = {
                from:email,
                to: process.env.EMAIL,
                subject: subject,
                html: `
                <div >
                <h3>Sender: ${fullname}</h3>
                <p>
                   ${body}</br>
                </p>
            </div>    
        `
            }
            res.status(200).json(savedmes);
            transporter.sendMail(mailOptions, ()=>{
                console.log('Message received from frontend')
            })
        
    } catch (error) {
        console.log(error)
    }
}
export const getAllMessage = async(req, res) =>{
    try {
        const mess = await Message.find({});
        res.status(200).json(mess);
        
    } catch (error) {
        console.log(error)
    }
}
export const getAllAdminMessage = async(req, res) =>{
    try {
        const mess = await Message.find({ fullname: { $ne: process.env.EMAIL } });
        res.status(200).json(mess);
    } catch (error) {
        console.log(error);
    }
}


export const getMessage = async(req, res)=>{
    try {
        const {id} = req.params;
        const mes = await Message.findById(id);
        res.status(200).json(mes);
    } catch (error) {
        console.log(error)
    }
}

export const updateMessage = async(req, res)=>{
    try {
        const {id} = req.params;
        const mes = await Message.findByIdAndUpdate(id, 
            {$set:req.body}, {new:true}
        );
        res.status(200).json(mes);
    } catch (error) {
        console.log(error)
    }
}
export const deleteMessage = async(req, res)=>{
    try {
        const {id} = req.params;
        await Message.findByIdAndDelete(id);
        res.status(200).json('Message deleted successfully');
    } catch (error) {
        console.log(error)
    }
}