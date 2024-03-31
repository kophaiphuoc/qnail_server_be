const { postBlog } = require('../models/Post_models');

const PostBlogService = {
    addNewPostService: async (newPost) => {
        try {
            if (!newPost.title || !newPost.image || !newPost.content) {
                return 2
            } else {
                const now = new Date();
                const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
                const formattedDate = now.toLocaleDateString('en-US', options).replace(/\//g, '-');

                const newPostModel = new postBlog({
                    title: newPost.title,
                    image: newPost.image,
                    content: newPost.content,
                    created_date: formattedDate,
                    updated_date: newPost.updated_date,
                    author: 'qnailssherwoodpark'
                });
                const updateNewPost = await newPostModel.save();
                if (!updateNewPost) {
                    return 2
                } else {
                    return 1
                }
            }

        } catch (error) {
            return 2
        }
    },
    getListBlogService:async()=>{
        try {
            const listBlog = await postBlog.find();
            if (!listBlog) {
                return 1
            }else{
                return listBlog
            }
        } catch (error) {
            return 2
        }
    },
    deleteBLogService:async(id)=>{
        try {
            const delte = await postBlog.findByIdAndDelete(id);
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

module.exports = { PostBlogService }