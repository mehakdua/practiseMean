var app =angular.module('meanapp');
app.service('GenreService',function($http){
  this.getGenres = function(callback){
  	$http({ method: 'GET',url: '/api/genres'}).then(function(response){
  		callback(response);
  	});
  }
  this.addGenre = function(genre, callback){
  	var data = {name:genre};
  	$http({ method: 'POST',url: '/api/genres',data:data}).then(function(response){
  		callback(response);
  	});
  }
  this.deleteGenre = function(id, callback){
  	$http({ method: 'DELETE',url: '/api/genres/'+id}).then(function(response){
  		callback(response);
  	});
  }
   this.modifyGenre = function(id,name, callback){
   	var data = {name:name};
  	$http({ method: 'PUT',url: '/api/genres/'+id,data:data}).then(function(response){
  		callback(response);
  	});
  }
})