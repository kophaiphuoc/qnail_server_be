const { PopupService } = require('../services/PopupService');

const PopupController = {
    addPopupList: async (req, res) => {
        try {
            const imgPopup = req.img
            console.log(imgPopup)
            const UploadPopup = await PopupService.addPopupService(imgPopup)
            if (UploadPopup == 2) {
                res.status(500).json({
                    mess: 'add popup failed'
                })
            } else {
                res.status(200).json({
                    mess: 'add popup successfully'
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                mess: 'add popup failed'
            })
        }
    },
    getListPopup: async (req, res) => {
        try {
            const getListPopup = await PopupService.listPopupService()
            if (getListPopup == 2) {
                res.status(500).json({
                    mess: 'get list popup failed'
                })
            } else {
                res.status(200).json({
                    mess: 'get list popup successfully',
                    data: getListPopup
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                mess: 'get list popup failed'
            })
        }
    },
    choosePopup: async (req, res) => {
        try {
            const id = req.body.id
            const choosePopup = await PopupService.chooseePopup(id)
            if (choosePopup == 2) {
                res.status(500).json({
                    mess: 'choose popup failed'
                })
            } else {
                res.status(200).json({
                    mess: 'choose popup successfully',
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                mess: 'choose popup failed'
            })
        }
    },
    deletePopup: async (req, res) => {
        try {
            const id = req.body.id
            const deletePopup = await PopupService.deletePopup(id)
            if (deletePopup == 2) {
                res.status(500).json({
                    mess: 'delete popup failed'
                })
            } else {
                res.status(200).json({
                    mess: 'delete popup successfully',
                })
            }
        } catch (error) {
            res.status(500).json({
                mess: 'delete popup failed'
            })
        }
    }
}

module.exports = { PopupController };