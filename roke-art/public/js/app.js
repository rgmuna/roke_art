var rokeApp = angular.module('rokeApp', [
  'ui.bootstrap',
  'ui.router'
])

rokeApp.controller('ApplicationController', ['$scope', '$rootScope', function($scope, $rootScope) {
  $scope.model = {
    test : 'test stuff'
  };


}]);