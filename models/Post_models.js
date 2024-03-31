const mongoose = require('mongoose');

const postShecma = new mongoose.Schema({
    title: {
        type: 'string',
        require: true
    },
    image:{
        type:'string',
        require: true
    },
    content: {
        type: 'string',
        require: true
    },
    created_date: {
        type: 'string',
        require: true
    },
    updated_date:{
        type: Date,
    },
    author:{
        type:'string'
    }
})
const postBlog = mongoose.model("postBlog", postShecma)
module.exports = { postBlog }