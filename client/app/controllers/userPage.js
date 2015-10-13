angular.module('treasureHunt.userPage',['treasureHunt.services'])
.controller('userPageCtrl', ['$scope', '$location', '$state', '$window', 'RequestFactory',
  function($scope, $location, $state, $window, RequestFactory){
    $scope.games=[];
    console.log('stateparams: ', $state.params);
    $scope.getAllGames = function(){
      RequestFactory.getGames({userName:$state.params.id}).then(function(resp){
        $scope.games = resp;
        $scope.nutsArr = [];
        for(var i = 0; i < $scope.games.length; i++){
          var score = RequestFactory.averageRateInNuts($scope.games[i].avgRating);
          $scope.nutsArr.push(score);
        }
      console.log('games', $scope.nutsArr);
      });
    };
    $scope.gameInfo = function(gameId){
      $state.go('gameInfo', {id: gameId});
    };

    $scope.editGame = function(gameId){
      console.log('editGame/'+gameId);
      $state.go('editGame', {id: gameId});
    };
}]);