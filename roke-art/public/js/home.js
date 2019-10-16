rokeApp.controller('HomeController', ['$scope', '$rootScope', 'GalleryData', function ($scope, $rootScope, GalleryData) {
  $scope.model = {
    carouselPaintings: [],
    carouselInterval : 5000,
    noWrapSlides     : false,
    active           : 0
  }

  var model = {
    carouselIndex : 0
  }

  for (var image in GalleryData) {
    if (GalleryData.hasOwnProperty(image)) {
      if (GalleryData[image].carousel) {
          GalleryData[image].id = model.carouselIndex;
          $scope.model.carouselPaintings.push(GalleryData[image]);
          model.carouselIndex++;
        }
    }
  }

  console.log($scope.model);


}]);