const router = require("express").Router();
const {PostBlogControllers} = require('../controllers/PostBlogControllers')
const ConvertImmg = require('../middlewares/ConvertImg')

router.post('/postblog',ConvertImmg,PostBlogControllers.addNewPostController)
router.post('/deleteblog',PostBlogControllers.deleteBlogController)
router.get('/getlist',PostBlogControllers.getListBlogController)





module.exports = router;