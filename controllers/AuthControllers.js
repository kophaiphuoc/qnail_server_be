const {AuthService} = require('../services/AuthService')

const AuthController = {
    ChechLoginController:async(req,res)=>{
        try {
            const Auth = req.body
            const checkLogin = await AuthService.CheckLoginService(Auth);
            if (checkLogin == 2){
                res.status(404).json({
                    mess:'Account not found'
                })
            }else{
                res.status(200).json({
                    mess:'Login successful',
                    token:checkLogin
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                mess:'error login'
            })
        }
    }
}

module.exports = {AuthController}