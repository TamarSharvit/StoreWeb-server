var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
	'firstName' : String,
	'lastName' : String,
	'email' : {type: String, unique: true},
	'password' : Number
},
	{timestamps: true},
	);
/////////////////////////////////
UserSchema.virtual('ordersUser', {
	ref: 'Order',
	localField: '_id',
	foreignField: 'user_id'

});

UserSchema.set('toObject', {virtuals: true});
UserSchema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('User', UserSchema);
