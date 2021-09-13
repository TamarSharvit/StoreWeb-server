var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ProductSchema = new Schema({
	'name' : String,
	'image' : String,
	'description' : String,
	'price' : Number,
	'category_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Category'
	}
},
	{timestamps: true}
);

module.exports = mongoose.model('Product', ProductSchema);
