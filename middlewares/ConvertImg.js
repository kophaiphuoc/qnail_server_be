const multer = require('multer');
const path = require('path');

const ConvertImmg = (req, res, next) => {
  console.log(req.body)
  //Khởi tạo middleware upload file
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });

  const upload = multer({ storage: storage }).single('image');

  // Handle post request
  upload(req, res, (err) => {
    console.log(req.file)
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Error uploading file",
        error: err
      });
    }
    const { title, content } = req.body;
    const { path } = req.file;

    // Xử lý logic ở đây
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('File path:', path);

    req.convert = {
        title:title,
        content:content,
        image:path
    }
    next()
  });
};

module.exports = ConvertImmg;
