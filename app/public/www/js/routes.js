angular.module('transport').config(function($stateProvider, $urlRouterProvider) {
  var internalRoot = {
    url: '/internal',
    abstract: true,
    templateUrl: 'templates/internal/internal.html',
    controller: 'AppController',
    resolve: {
      lines: ['ApiService', 'LinesService', function (ApiService, LinesService) {
        return ApiService.getLines().then(function(lines) { LinesService.setLines(lines); return true; });
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
        return ApiService.getDisruptions().then(function(disruptions) { DisruptionsService.setDisruptions(disruptions); return true; });
      }]
    }
  };


  var internalMap = {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/internal/map.html'
      }
    }
  };


  $stateProvider
    .state('internal', internalRoot)
    .state('internal.disruptions', internalDisruptions)
    .state('internal.map', internalMap);

  $urlRouterProvider.otherwise('/internal/disruptions');
});
