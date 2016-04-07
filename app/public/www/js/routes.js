angular.module('transport').config(function($stateProvider, $urlRouterProvider) {
  var internalRoot = {
    url: '/internal',
    abstract: true,
    templateUrl: 'templates/internal/internal.html',
    controller: 'AppController',
    resolve: {
      lines: ['ApiService', 'LinesService', function (ApiService, LinesService) {
        return ApiService.getLines().then(function(lines) { LinesService.lines = lines; return true; });
      }]
    }
  };

  var internalDisruptions = {
    url: '/disruptions',
    views: {
      'menuContent': {
        templateUrl: 'templates/internal/disruptions.html',
        controller: 'DisruptionsController'
      }
    },
    resolve: {
      disruptions: ['ApiService', 'DisruptionsService', function (ApiService, DisruptionsService) {
        return ApiService.getDisruptions().then(function(disruptions) { DisruptionsService.disruptions = disruptions; return true; });
      }]
    }
  };

  var externalRoot = {
    url: '/external',
    abstract: true,
    templateUrl: 'templates/external/external.html',
    controller: 'AppController'
  };

  var externalDisruptions = {
    url: '/disruptions',
    views: {
      'menuContent': {
        templateUrl: 'templates/external/disruptions.html',
        controller: 'DisruptionsController'
      }
    }
  }

  $stateProvider
    .state('internal', internalRoot)
    .state('internal.disruptions', internalDisruptions)
    .state('external', externalRoot)
    .state('external.disruptions', externalDisruptions);

  $urlRouterProvider.otherwise('/internal/disruptions');
});
