const express = require('express');
const router = express.Router();
const multer = require('multer');
const sharp = require('sharp');

const db = require('../conf/database');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/uploads')
    },
    filename: function (req, file, cb) {
      // image/jpeg
      let fileExt = file.mimetype.split("/")[1];
      cb(null, `${file.fieldname}-${Date.now()}-${Math.round(Math.random() * 1E9)}.${fileExt}`)
    }
  })
  
  const upload = multer({ storage: storage })

router.post("/create", upload.single("uploadImage") , function(req,res,next){
    console.log(req);
    res.send();
})

module.exports = router;