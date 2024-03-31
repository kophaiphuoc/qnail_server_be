const router = require("express").Router();
const {PopupController} = require('../controllers/PopupControllers')
const ConvertPopup = require('../middlewares/ConvertPopup')

router.post('/postpopup',ConvertPopup,PopupController.addPopupList)
router.get('/getlistpopup',PopupController.getListPopup)
router.post('/choosepopup',PopupController.choosePopup)
router.post('/deletepopup',PopupController.deletePopup)

module.exports = router;