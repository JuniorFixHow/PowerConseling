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