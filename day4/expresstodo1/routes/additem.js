var express = require('express');
var router = express.Router();

var items = []
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form')
});

router.post('/', (req, res)=>{
  var values = req.body
  items.push(values)
  res.render('index', {value: {items}})

})

module.exports = router;
