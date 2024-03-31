const mongoose = require('mongoose');

const AuthShecma = new mongoose.Schema({
    username: {
        type: 'string',
        require: true,
        unique: true
    },
    password:{
        type:'string',
        require: true
    }
})
const Auth = mongoose.model("Auth", AuthShecma)
module.exports = { Auth }