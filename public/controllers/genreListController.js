var app =angular.module('meanapp');
app.controller('GenreListController',['$scope','GenreService',function($scope,GenreService){
  function init(){
  	GenreService.getGenres(function(response){
  		$scope.genres = response.data;
  	});
  }
  $scope.addGenre  = function(){
  	GenreService.addGenre($scope.name,function(response){
  		$scope.genres.push(response.data);
  	})
  }
  $scope.editGenre = function(genre){
  	$scope.oldVal = genre._id;
  	$scope.updatedVal = genre.name;

  } 
  $scope.modifyGenre = function(){
  	GenreService.modifyGenre($scope.oldVal,$scope.updatedVal,function(response){
  		init();
  	})
  }
  $scope.deleteGenre = function(genre){
  	GenreService.deleteGenre(genre._id,function(response){
  		init();
  	})
  } 
  init();
}])