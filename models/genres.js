var mongoose =require("mongoose");
//var Genres = mongoose.model('Genres', new Schema({ name: String }));
var genreSchema = mongoose.Schema({ 
	name: {
		type:String,
		required:true
	},
	created_date:{
		type: Date,
		default:Date.now
	} 
});
var Genre = module.exports = mongoose.model("Genre" , genreSchema);
module.exports.getGenres = function(callback){
	Genre.find(callback);
}
module.exports.getGenre = function(id,callback){
	Genre.find({ _id: id },callback);
}
module.exports.addGenre = function(genre,callback){
	Genre.create(genre,callback);
}
module.exports.updateGenre = function(id,name,callback){
	console.log(id,name,'name');
	Genre.findOneAndUpdate({ _id: id},{ $set: { name: name }} ,callback);
}
module.exports.deleteGenre = function(id,callback){
	console.log(id,'name');
	Genre.findOneAndRemove({ _id: id} ,callback);
}
