var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var CategorySchema = new Schema({
	'name' : String
},
////////////////////////////////// שמירה של הזמן
	{timestamps: true}
);

module.exports = mongoose.model('Category', CategorySchema);
