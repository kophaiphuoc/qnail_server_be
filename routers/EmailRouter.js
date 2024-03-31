const router = require("express").Router();
const {EmailControllers} = require('../controllers/EmailControllers')

router.post('/sendmail',EmailControllers)

module.exports = router;