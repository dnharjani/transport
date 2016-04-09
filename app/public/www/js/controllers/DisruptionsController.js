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

        addNewDisruption: addNewDisruption,
        clearNewDisruption: clearNewDisruption,
        addDisruption: addDisruption,
        removeDisruption: removeDisruption
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

    function removeDisruption(disruptionId) {
      ApiService.removeDisruption(disruptionId)
        .then(function(){
          DisruptionsService.removeDisruption(disruptionId);
          $scope.disruptions = mergeLinesIntoDisruptions(DisruptionsService.getDisruptions());
        })
        .catch(function(err) {
          ErrorService.showError('Error removing Disruption', err);
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

    function addDisruption() {
      return ApiService.addDisruption($scope.newDisruption.lineId, $scope.newDisruption.fromStationId, $scope.newDisruption.toStationId, $scope.newDisruption.fromDate, $scope.newDisruption.toDate, $scope.newDisruption.reason)
        .then(function(model){
          DisruptionsService.addDisruption(model);
          $scope.disruptions = mergeLinesIntoDisruptions(DisruptionsService.getDisruptions());
          $scope.newDisruption = null;
        })
        .catch(function(err) {
          ErrorService.showError('Error adding Disruption', err);
        });
    }
  });
