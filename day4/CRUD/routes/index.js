var express = require('express');
var router = express.Router();
var Item = require('../models/item')

/* GET home page. */
router.get('/', function(req, res) {
  Item.find((err, value)=>{
    if (err){
      console.log(err)
    }
    res.render('index', {value: {value}});
  })
});

router.get('/delete/:id', (req, res)=>{
  Item.findByIdAndRemove(req.params.id, (err, data)=>{
    if(err){
      console.log(err)
    }
    else{
      res.redirect('/')
    }
  })
})

router.get('/update/:id', (req, res)=>{
  Item.findById(req.params.id).then(value=>{
    res.render('form', {value: value})
  })
})

module.exports = router;
