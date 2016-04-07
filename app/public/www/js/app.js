angular.module('transport',
  [
    'ionic',
    'angular-md5'
  ])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('internal', {
        url: '/internal',
        abstract: true,
        templateUrl: 'templates/internal/internal.html',
        controller: 'AppController'
      })
      .state('internal.disruptions', {
        url: '/disruptions',
        views: {
          'menuContent': {
            templateUrl: 'templates/internal/disruptions.html',
            controller: 'DisruptionsController'
          }
        }
      })
      .state('external', {
        url: '/external',
        abstract: true,
        templateUrl: 'templates/external/external.html',
        controller: 'AppController'
      })
      .state('external.disruptions', {
        url: '/disruptions',
        views: {
          'menuContent': {
            templateUrl: 'templates/external/disruptions.html',
            controller: 'DisruptionsController'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/internal/disruptions');
  });
