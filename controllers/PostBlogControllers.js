const multer = require('multer');
const path = require('path');

const { PostBlogService } = require('../services/PostBlogService')

const PostBlogControllers = {
    addNewPostController: async (req, res) => {
        try {
            const newPost = req.convert
            console.log(newPost)
            const updatePost = await PostBlogService.addNewPostService(newPost)
            console.log(updatePost)
            if (updatePost === 2) {
                res.status(500).json({
                    mess: 'there is an empty field, update failed',
                })
            } else {
                res.status(200).json({
                    mess: 'Up new post successfully'
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({
                mess: 'there is an empty field, update failed',
                error: error
            })
        }
    },
    getListBlogController: async (req,res) => {
        try {
            const listBlog = await PostBlogService.getListBlogService();
            if (listBlog === 2) {
                res.status(500).json({
                    mess: 'get list failed',
                })
            } else {
                res.status(200).json({
                    mess: 'get list successfully',
                    data: listBlog
                })
            }
        } catch (error) {
            res.status(500).json({
                mess: 'get list failed',
            })
        }
    },
    deleteBlogController: async (req, res) => {
        try {
            const id = req.body.id
            const deleteBlog = await PostBlogService.deleteBLogService(id)
            if (deleteBlog == 2) {
                res.status(500).json({
                    mess: 'delete Blog failed'
                })
            } else {
                res.status(200).json({
                    mess: 'delete Blog successfully',
                })
            }
        } catch (error) {
            res.status(500).json({
                mess: 'delete Blog failed'
            })
        }
    }
}

module.exports = { PostBlogControllers }