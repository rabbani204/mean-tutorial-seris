var express = require('express');
var router = express.Router();
var Item = require('../models/item')

/* GET home page. */
router.get('/', function(req, res) {
  Item.find((err, value)=>{
    if (err){
      console.log(err)
    }
    console.log(err)
    console.log('value', value)
    res.render('index', {value: {value}});
  })
});

module.exports = router;
