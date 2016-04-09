angular.module('transport')
  .controller('DisruptionsController', function($scope, DisruptionsService, LinesService) {
    init();

    function init() {
      var disruptions = DisruptionsService.getDisruptions();

      // Note: This could also be done in the backend but would result in Disruptions having duplicate data - DH
      disruptions = mergeLinesIntoDisruptions(disruptions);

      angular.extend($scope, {
        disruptions: disruptions,
        newDisruption: null,

        refreshDisruptions: refreshDisruptions,
        removeDisruption: removeDisruption,
        addDisruption: addDisruption,
        addNewDisruption: addNewDisruption,
        clearNewDisruption: clearNewDisruption
      });
    }

    function mergeLinesIntoDisruptions(disruptions) {
      _.each(disruptions, function(disruption) {
        disruption.line = LinesService.getLineById(disruption.lineId);
        disruption.fromStation = LinesService.getStationInLineById(disruption.lineId, disruption.fromStationId);
        disruption.toStation = LinesService.getStationInLineById(disruption.lineId, disruption.toStationId);
      });

      return disruptions;
    }

    function refreshDisruptions() {
      DisruptionsService.refreshDisruptions()
        .then(function(){
          $scope.disruptions = mergeLinesIntoDisruptions(DisruptionsService.getDisruptions());
          $scope.$broadcast('scroll.refreshComplete');
        });
    }

    function removeDisruption(disruptionId) {
      DisruptionsService.removeDisruption(disruptionId)
        .then(function(){
          $scope.disruptions = mergeLinesIntoDisruptions(DisruptionsService.getDisruptions());
        });
    }

    function addDisruption() {
      DisruptionsService.addDisruption($scope.newDisruption.lineId, $scope.newDisruption.fromStationId, $scope.newDisruption.toStationId, $scope.newDisruption.fromDate, $scope.newDisruption.toDate, $scope.newDisruption.reason)
        .then(function(){
          $scope.disruptions = mergeLinesIntoDisruptions(DisruptionsService.getDisruptions());
          $scope.newDisruption = null;
        });
    }

    function addNewDisruption() {
      $scope.newDisruption = {
        lineId: 1,
        fromStationId: 1,
        toStationId: 2,
        fromDate: null,
        toDate: null,
        reason: null
      }
    }

    function clearNewDisruption() {
      $scope.newDisruption = null;
    }
  });
