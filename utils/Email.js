import sgMail from '@sendgrid/mail';
import dotenv  from 'dotenv';

sgMail.setApiKey(process.env.MAIL_KEY)
export const sendEmail = async(content, toEmail, fromEmail, subject, fromName, bodyText)=>{
    const msg = {
        to: toEmail,
        from:{
            name: fromName,
            email:fromEmail
        },
        subject: subject,
        text:bodyText,
        html: content
    }

    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error)
        if(error.response){
            console.log(error.response.body);
        }
    }
}


export const sendDynamicEmail = async (fullname, toEmail) =>{
    const msg = {
        to: toEmail,
        from:{
            name: 'AcuPower',
            email:process.env.EMAIL
        },
        templateId: process.env.TEMP_KEY,
        dynamicTemplateData:{
            fullname
        }
    }

    try {
        await sgMail.send(msg);
        console.log('Message sent')
    } catch (error) {
        console.error(error)
        if(error.response){
            console.log(error.response.body);
        }
    }
}