rokeApp.controller('GalleryController', ['$scope', '$rootScope', 'GalleryData', function ($scope, $rootScope, GalleryData) {
  $scope.model.paintings = GalleryData;
}]);