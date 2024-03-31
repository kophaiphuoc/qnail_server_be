const mongoose = require('mongoose');

const PopupShecma = new mongoose.Schema({
    imgpopup: {
        type: 'string',
        require: true,
    },
    title: {
        type: 'string',
        require: true,
    }
})
const Popup = mongoose.model("Popup", PopupShecma)
module.exports = { Popup }