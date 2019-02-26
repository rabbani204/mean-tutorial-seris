var express = require('express');
var router = express.Router();

var fs = require("fs");
var multer = require('multer')
const path = require('path');


var Item = require('../models/item')
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('additem');
});

// router.post('/' , (req,res)=>{
 
//     var tittle = req.body.tittle;
//     var description = req.body.description;

//     var item = new Item({

//         tittle : tittle,
//         description : description 
//     })

//     item.save((data,error)=>{
//         if(error){
//             console.log(error)
//         }
//         else{
//             console.log(data);
//         }
//     })

//     res.redirect('/');
// })

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('image');

// Check File Type
function checkFileType(file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images Only!');
    }
}



router.post('/', function (req, res) {
    upload(req, res, (err) => {
        if (err) {
            res.redirect('/additem', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.redirect('/additem', {
                    msg: 'Error: No File Selected!'
                });
            } else {
                filename = req.file.filename
                console.log(filename, req.body.title);
                const item = new Item({
                    tittle: req.body.tittle,
                    description: req.body.desription,
                    image: filename,
  
                })
                    console.log(item);
                    item.save();
                    res.redirect('/');
                
            }
        }
    });
});


module.exports = router;