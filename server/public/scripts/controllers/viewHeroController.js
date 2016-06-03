app.controller('ViewHeroController', ['$scope', '$http', function($scope, $http) {
  console.log('ViewHeroController controller running');

  $scope.heroes = [];
  $scope.powers = [];

  getSuperPowers();
  getSuperheroes();


  //function for getting superpowers from database
  //call function for getting superpowers right away

  function getSuperPowers() {
    $http.get('/database')
      .then(function (response) {
        console.log(response);
        $scope.powers = response.data;
      });
  }

  //sort heroes based on superpower
  $scope.sortHeroes = function () {
    $http.post('/heroes', data)
      .then(function () {
        console.log('POST /heroes');

      });
  };


  //DELETE -- request to delete hero from DB and calls getSuperheroes to refresh DOM
  $scope.deleteHero = function (id) {
    console.log(id);
    $http.delete('/heroes/' + id)
      .then(function (response) {
        getSuperheroes();

      });
  };


  //GET -- request to get all heroes from DB to populate DOM
  function getSuperheroes () {
    $http.get('/heroes')
      .then(function (response) {
        console.log(response);
        $scope.heroes = response.data;
      });
  }


}]);


















//
