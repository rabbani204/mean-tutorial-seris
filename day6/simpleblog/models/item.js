
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var itemSchema = new Schema({

    tittle:{
        type: String
    },
    description:{
        type: String
    },
    image:{
		type: String
	},
})
module.exports=mongoose.model('Item',itemSchema);