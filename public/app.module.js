
/**
 * @ngdoc overview
 * @name sampleApp
 * @description
 * # sampleApp
 *appModule.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
 * Main module of the application.
 */
angular
  .module('meanapp', [
    'ngRoute'
  ])
  .config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
  	 $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/genres.html',
        controller: 'GenreListController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  }]);
