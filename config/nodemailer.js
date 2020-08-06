const nodemailer=require('nodemailer');


module.exports.transporter=nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"ahjdfhkad@gmail.com",
        pass:"asdfasdf"
    }



})
module.exports.renderTemplage=function(){
    
      
     
}
 
