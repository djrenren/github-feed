
angular.module('ghFeedApp', ['ghFeed', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider){

    // Handle index route
    $routeProvider.when('/', {

      controller: 'ghFeedIndex',
      templateUrl: '/ghFeed/templates/index.html'

    });

    // Default to index
   // $routeProvider.otherwise('/');

  }]);