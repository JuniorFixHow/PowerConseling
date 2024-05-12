import Academy from "../models/AcademyModel.js";
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


export const createAcademy = async(req, res) =>{
    try {
        const {email, fullname} = req.body;
        const aca = await Academy.findOne({email});
        if(aca){
            res.status(422).json('Email used already');
        }
        else{
            const newAca = new Academy( req.body);
            const savedAca = await newAca.save();
            mailOptions = {
                from: process.env.EMAIL,
                to:email,
                subject: 'Welcome to AcuPower',
                html: `
                <!DOCTYPE html>
<html>
<head>
  <title>Welcome to AcuPower</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    h1 {
      color: #333333;
      text-align: center;
    }
    
    p {
      color: #666666;
      line-height: 1.5;
      margin-bottom: 20px;
    }
    
    .button {
      display: inline-block;
      background-color: #4caf50;
      color: #ffffff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 3px;
    }
    
    .button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Welcome to AcuPower!</h1>
    <p>Dear ${fullname},</p>
    <p>Thank you for creating an account with AcuPower. We are thrilled to have you on board! With AcuPower, you have access to cutting-edge solutions and expert guidance to power up your business.</p>
    <p>Our team of professionals is dedicated to helping you achieve your goals and maximize your success. From innovative strategies to personalized support, we're here to assist you every step of the way.</p>
    <p>Feel free to explore our resources, services, and tools available on our platform. If you have any questions or need assistance, don't hesitate to reach out to our friendly customer support team.</p>
    <p>Once again, welcome to AcuPower. We're excited to be a part of your journey towards growth and prosperity!</p>
    <p>
      Best regards,<br>
      The AcuPower Group
    </p>
    <p style="text-align: center;">
      <a class="button" href="powerconsulting.netlify.app">Visit AcuPower</a>
    </p>
  </div>
</body>
</html>   
                `
            }
            transporter.sendMail(mailOptions, ()=>{
                console.log('Message sent to AcuPower')
            })
            res.status(200).json(savedAca);
        }
        
    } catch (error) {
        console.log(error)
    }
}
export const getAllAcademy = async(req, res) =>{
    try {
        const acas = await Academy.find({});
        res.status(200).json(acas);
        
    } catch (error) {
        console.log(error)
    }
}

export const getAcademy = async(req, res)=>{
    try {
        const {id} = req.params;
        const aca = await Academy.findById(id);
        res.status(200).json(aca);
    } catch (error) {
        console.log(error)
    }
}
export const deleteAcademy = async(req, res)=>{
    try {
        const {id} = req.params;
        await Academy.findByIdAndDelete(id);
        res.status(200).json('Academy deleted successfully');
    } catch (error) {
        console.log(error)
    }
}