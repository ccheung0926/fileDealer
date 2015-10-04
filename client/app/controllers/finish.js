angular.module('treasureHunt.finishGame',['treasureHunt.services'])

.controller('FinishGameCtrl', ['$scope','RequestFactory', '$location', '$cookies', function($scope, RequestFactory, $location, $cookies){
  var vm = this;
  // $scope.document = document;
  // $scope.script = "script";
  // $scope.facebook = "facebook-jssdk";

  $scope.currentGame = RequestFactory.currentGame;

  $scope.finishLine = function(){
    $scope.lastGame = RequestFactory.currentGame();
    // var cookie = $cookies.get($scope.lastGame.gameId)
    $cookies.remove($scope.lastGame.gameId);
      // console.log('cookie');
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;  
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  };
}]);