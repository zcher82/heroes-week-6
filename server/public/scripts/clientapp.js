var app = angular.module('heroApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
    })
    .when('/entersuperhero', {
      templateUrl: '/views/entersuperhero.html',
      controller: 'EnterHeroController'
    })
    .when('/viewsuperhero', {
      templateUrl: '/views/viewsuperhero.html',
      controller: 'ViewHeroController'
    })
    .otherwise({
      redirectTo: '/home'
    })

}]);
