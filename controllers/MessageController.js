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
                <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AcuPower Group</title>
    <style>
        body{
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin:0;
            padding:0;
            width: 100%;
        }

        .main{
            box-shadow: 2px 4px 9px rgba(0, 0, 0, 0.25);
            width: 50rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            border-radius: 0.2rem;
        }

        .main .container{
            width: 100%;
            gap: 1rem;
            align-items: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
        }

        .main img{
            width: 8rem;
            height: 5rem;
            object-fit: contain;
        }
        .main p{
            text-align: justify;
            font-size: 1.2rem;
        }
        .main .greet{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: start;
        }
        .main .best{
            font-size: 1.2rem;
        }

        .main a{
            text-decoration: none;
            color: dodgerblue;
            font-size: 1.2rem;
        }
    </style>
  </head>
  <body>
    <div class="main">

        <div class="container">
          <img
            src="https://powerconsulting.netlify.app/assets/logo-Bn9bFxm1.png"
            alt="AcuPower"
          />
          <p>
            ${body}
          </p>
        </div>
        <br />
        <div class="greet">
          <span class="best">Best regards, </span>
          <a href="powerconsulting.netlify.app/" target="_blank">
            <b>AcuPower Group</b>
          </a>
        </div>
    </div>
  </body>
</html>
  
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
                <!DOCTYPE html>
                <html>
                  <head>
                    <title>User enquiries</title>
                    <style>
                        body{
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                            width:100%;
                            display:flex;
                            justify-content: center;
                            align-items:center;
                        }
                        
                        .main{
                            width: 80%;
                            padding: 16px;
                            display: flex;
                            flex-direction: column;
                            border-radius: 2px;
                            background-color: #ffffff;
                            box-shadow: 2px 4px 9px rgba(0, 0, 0, 0.25);
                        }
                
                        .container{
                            width: 100%;
                            gap: 16px;
                            align-items: center;
                            justify-content: center;
                            display: flex;
                            flex-direction: column;
                        }
                
                         
                         p{
                            text-align: justify;
                            font-size: 20px;
                        }
                        
                    </style>
                  </head>
                  <body>
                    <div class="main">
                        <div class="container">
                          <p>
                            ${body}
                          </p>
                        </div>
                    </div>
                  </body>
                </html> `
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