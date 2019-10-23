rokeApp.controller('GalleryController', ['$scope', '$rootScope', 'GalleryData', '$uibModal', function ($scope, $rootScope, GalleryData, $uibModal) {
  $scope.model.paintings = GalleryData;

  $scope.zoomIn = function(painting) {
    var paintingModal = $uibModal.open({
      controller   : "PaintingModalController",
      templateUrl  : '/views/painting-popup.html',
      size         : 'lg',
      windowClass  : 'show',
      backdropClass: 'show',
      resolve      : {
        paintInfo: function () {
          return painting;
        }
      }
    });

    paintingModal.result.then(function() {

    });
  }
}])
.controller('PaintingModalController', ['$uibModalInstance', '$scope', 'paintInfo', function ($uibModalInstance, $scope, paintInfo) {
  $scope.model = paintInfo;

  $scope.closePopup = function() {
    $uibModalInstance.dismiss('cancel');
  }
}]);