angular.module('app', [])
  .controller('PrenomCtrl', ['$scope', function($scope) {
    $scope.prenoms = [];

    $scope.addPrenom = function() {
      $scope.prenoms.push($scope.prenom);
      $scope.prenom = '';
    };

    $scope.removePrenom = function(i) {
      $scope.prenoms.splice(i, 1);
    };
  }]);