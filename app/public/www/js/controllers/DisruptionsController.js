angular.module('transport')
  .controller('DisruptionsController', function($scope, DisruptionsService, LinesService) {
    init();

    function init() {
      var disruptions = DisruptionsService.getDisruptions();

      // Note: This could also be done in the backend but would result in Disruptions having duplicate data - DH
      disruptions = mergeLinesIntoDisruptions(disruptions);

      angular.extend($scope, {
        disruptions: disruptions
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
        })
        .catch(function(err) {
          ErrorService.showError('Error removing Disruption', err);
        });
    }

    function addDisruption() {
      return ApiService.addDisruption(lineId, fromStationId, toStationId, fromDate, toDate, reason)
        .then(function(model){
          DisruptionsService.addDisruption(model);
        })
        .catch(function(err) {
          ErrorService.showError('Error adding Disruption', err);
        });
    }



  });
