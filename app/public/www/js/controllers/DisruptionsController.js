angular.module('transport')
  .controller('DisruptionsController', function($scope, DisruptionsService, LinesService) {
    $scope.disruptions = DisruptionsService.disruptions;
    $scope.lines = LinesService.lines;
  });
