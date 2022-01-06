
import nodemailer from "nodemailer"
import { GMAIL_NAME, GMAIL_PASSWORD } from "./Variables"


let send_email = (to:any,subj:any,msg:any)=>{
    let ans=false
    let transporter =  nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:GMAIL_NAME,
            pass:GMAIL_PASSWORD
        }
    })
    let mailOptions = {
        from:GMAIL_NAME,
        to:to,
        subject:subj,
        text:msg
    }
    transporter.sendMail(mailOptions,  (err,info)=>{    
        console.log(err,info);
            
        if(info?.accepted?.length !==0){
            ans=false
        }
        if(err){
            ans = true
        }
    })
    return ans;
}
export default send_email;
// {...ans,"error":true,"message":err}
// {...ans,"error":false,"message":"Sent successfully"}