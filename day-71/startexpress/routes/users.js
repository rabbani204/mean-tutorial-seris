var express = require('express');
var router = express.Router();
var person = {
  name : "rabbani",
  age: 2323
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(person);
});

module.exports = router;
