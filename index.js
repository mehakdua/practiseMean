var express =require("express");
var app =express();
var mongoose =require("mongoose");
var bodyParser= require("body-parser");
var Genre = require("./models/genres");
var Book = require("./models/books");
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});
app.use(bodyParser.json());
app.get("/",function(req,res){
	res.send("hello worldd");
});
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
app.listen(3000, () => console.log('Example app listening on port 3000!'));