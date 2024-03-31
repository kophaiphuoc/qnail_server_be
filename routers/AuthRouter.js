const router = require("express").Router();
const {AuthController} = require('../controllers/AuthControllers')

router.post('/checklogin',AuthController.ChechLoginController)





module.exports = router;