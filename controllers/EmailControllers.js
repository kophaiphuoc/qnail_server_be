const {SendMail} = require('../services/EmailService')

const EmailControllers =async (req,res) =>{
    try {
        const name =req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const content = req.body.content;

        const sendMail = await SendMail(name,email, phone, content)
        if(sendMail == 2){
            res.status(500).json({
                mess:'sendMailError'
            })
        }else{
            res.status(200).json({
                mess:'sendMailSuccess'
            })
        }
    } catch (error) {
        res.status(500).json({
            mess:'sendMailError'
        })
    }
}

module.exports = {EmailControllers}