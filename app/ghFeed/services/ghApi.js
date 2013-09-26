
angular.module('GithubAPI', [])
  .factory('$github', ['$http', function($http){

    return {

      events: function(conf){
        console.log(conf.user + ':'+ conf.password);

        return $http.get("https://api.github.com/events", {

          headers: {
            Authorization: "Basic " + btoa(conf.user + ':'+ conf.password)
          }

        });

      }

    }

  }]);