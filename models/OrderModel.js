var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var OrderSchema = new Schema({
	'products' : Array,
	'orderSum' : Number,
	'date' : Date,
	'user_id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	}
},
	{timestamps: true}
);

module.exports = mongoose.model('Order', OrderSchema);
