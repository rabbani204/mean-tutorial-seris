var express = require('express');
var router = express.Router();
var Item = require('../models/item')
// var items = []
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form')
});

router.post('/', (req, res)=>{
  var name = req.body.name;
  var number = req.body.number;
  var item = new Item({
    name: name,
    number: number
  })
  item.save(function(data,err){
     if( err ){
       console.log(err);
     }

     else{
       console.log(data)
     }
  })

  res.redirect('/')

})

router.get('/delete/:id', (req, res)=>{
  console.log(req.params.id)
})

module.exports = router;
