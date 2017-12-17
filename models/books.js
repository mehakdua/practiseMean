var mongoose = require('mongoose');
var bookSchema = mongoose.Schema({
	name:'String',
	author:'String',
	genre:'String'
});
var book = module.exports =  mongoose.model('book',bookSchema);
module.exports.getBooks = function(callback) {
	book.find(callback);
}