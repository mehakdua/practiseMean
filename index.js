var express =require("express");
var app =express();
var mongoose =require("mongoose");
var bodyParser= require("body-parser");
var Genre = require("./models/genres");
var Book = require("./models/books");
//mongoose.connect('mongodb://localhost/bookstore');
//mongoose.connect('mongodb://mehak:mehak@ds133547.mlab.com:33547/bookstore');
if(process.env.NODE_ENV == "production"){
  mongoose.connect('mongodb://mehak:mehak@ds133547.mlab.com:33547/bookstore');
}else{
  mongoose.connect('mongodb://localhost/bookstore');
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));
var port = process.env.PORT ||3000;
//Get Genres
app.get("/api/genres",function(req,res){
	Genre.getGenres(function(err,genres){
		if(err){
			throw err;
		}
		res.json(genres);
	})
});
//Get By id
app.get("/api/genres/:id",function(req,res){
	Genre.getGenre(req.params.id,function(err,genre){
		if(err){
			throw err;
		}
		res.json(genre);
	})
});
//Create
app.post("/api/genres",function(req,res){
	var genre = req.body;
	Genre.addGenre(genre , function(err,genre){
		if(err){
			throw err;
		}
		res.json(genre);
	})
});
//Update
app.put("/api/genres/:id",function(req,res){
	var id = req.params.id;
	var name = req.body.name;
	console.log(id,name);
	Genre.updateGenre(id, name,function(err,genre){
		if(err){
			throw err;
		}
		res.json(genre);
	})
});
//delete 
app.delete("/api/genres/:id",function(req,res){
	var id = req.params.id;
	Genre.deleteGenre(id,function(err,genre){
		if(err){
			throw err;
		}
		res.json(genre);
	})
});

app.get("/api/books",function(req,res){
	Book.getBooks(function(err,books){
		if(err){
			throw err;
		}
		res.json(books);
	})
});
app.listen(port, () => console.log('Example app listening on port'+port));