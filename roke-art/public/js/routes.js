rokeApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  var homeState = {
    name : 'home',
    url  : '/home',
    views: {
      header  : {
        templateUrl: '/views/header-main.tpl.html',
        controller : 'HeaderController'
      },
      content : {
        templateUrl: '/views/home.tpl.html',
        controller : 'HomeController'
      }
    }
  };

  var aboutState = {
    name: 'about',
    url: '/about',
    views: {
      header: {
        templateUrl: '/views/header-other.tpl.html',
        controller: 'HeaderController'
      },
      content: {
        templateUrl: '/views/about.tpl.html',
        controller: 'AboutController'
      }
    }
  };

  var galleryState = {
    name : 'gallery',
    url  : '/gallery',
    views: {
      header: {
        templateUrl: '/views/header-other.tpl.html',
        controller : 'HeaderController'
      },
      content: {
        templateUrl: '/views/gallery.tpl.html',
        controller : 'GalleryController'
      }
    }
  };

  var contactState = {
    name: 'contact',
    url: '/contact',
    views: {
      header: {
        templateUrl: '/views/header-other.tpl.html',
        controller: 'HeaderController'
      },
      content: {
        templateUrl: '/views/contact.tpl.html',
        controller: 'contactController'
      }
    }
  };


  $stateProvider.state(homeState);
  $stateProvider.state(aboutState);
  $stateProvider.state(galleryState);
  $stateProvider.state(contactState);

}]);
