app.controller('EnterHeroController', ['$scope', '$http', function($scope, $http) {
  console.log('EnterHeroController controller running');

  $scope.currentHero = {};
  $scope.powers = [];

  getSuperPowers();


  //function for getting superpowers from database
  //call function for getting superpowers right away

  function getSuperPowers() {
    $http.get('/database')
      .then(function (response) {
        console.log(response);
        $scope.powers = response.data;
        return $scope.powers;
      });
  }


  $scope.submitCurrentHero = function () {
    var data = $scope.currentHero;
    $http.post('/database', data)
      .then(function () {
        console.log('POST /heroes');

      });
  };


}]);
