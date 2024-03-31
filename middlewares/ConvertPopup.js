const multer = require('multer');
const path = require('path');

const ConvertPopup = (req, res, next) => {
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
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Error uploading file",
        error: err
      });
    }
    const { title } = req.body;
    const { path } = req.file;

    console.log(path)
    req.img = {
        image:path,
        title:title
    }
    next()
  });
};

module.exports = ConvertPopup;
