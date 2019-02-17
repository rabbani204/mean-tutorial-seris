var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name:{
        type: String
    },
    number:{
        type: String
    }
})
module.exports=mongoose.model('Item',itemSchema);