rokeApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  var homeState = {
    name       : 'home',
    url        : '/home',
    templateUrl: '/views/home.tpl.html',
    // controller : 'HomeController'
  };

  var aboutState = {
    name       : 'about',
    url        : '/about',
    templateUrl: '/views/about.tpl.html',
    // controller : 'AboutController'
  };

  var galleryState = {
    name       : 'gallery',
    url        : '/gallery',
    templateUrl: '/views/gallery.tpl.html',
    controller : 'GalleryController'
  };

  var contactState = {
    name       : 'contact',
    url        : '/contact',
    templateUrl: '/views/contact.tpl.html',
    // controller : 'ContactController'
  };


  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
  $stateProvider.state(galleryState);
  $stateProvider.state(contactState);

}]);
