const { Popup } = require('../models/Popup_models');

const PopupService = {
    addPopupService: async (image) => {
        try {
            const popup = new Popup({
                imgpopup: image.image,
                title: image.title
            })
            const upload = await popup.save()

            if (upload) {
                return 1
            } else {
                return 2
            }
        } catch (error) {
            return 2
        }
    },
    listPopupService: async () => {
        try {
            const listPopup = await Popup.find();
            if (!listPopup) {
                return 2
            } else {
                return listPopup
            }
        } catch (error) {
            console.log(error)
            return 2
        }
    },
    chooseePopup: async (id) => {
        try {
            const findItem = await Popup.findById(id);
            await Popup.findByIdAndDelete(id);
            const popup = new Popup({
                imgpopup: findItem.imgpopup,
                title: findItem.title
            })
            const upload = await popup.save()
            if (!upload) {
                return 2
            } else {
                return 1
            }
        } catch (error) {
            console.log(error)
            return 2
        }
    },
    deletePopup: async (id) => {
        try {
           const delte = await Popup.findByIdAndDelete(id);
           if(!delte){
            return 2
           }else{
            return 1
           }
        } catch (error) {
            console.log(error)
            return 2
        }
    }
}

module.exports = { PopupService }