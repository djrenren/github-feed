
angular.module('ghFeedCtrl', ['GithubAPI'])
  .controller('ghFeedIndex', ['$scope', '$github', function($scope, $ghApi){

//    $scope.user = '';
//    $scope.password = '';

    $scope.events = [];

    $scope.loadEvents = function(){
      $ghApi.events({
        user: $scope.user,
        password: $scope.password
      }).success(function(events){
        $scope.events = events;
        console.log(events);
      });
    }


  }]);