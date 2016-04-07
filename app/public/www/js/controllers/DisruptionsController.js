angular.module('transport')
  .controller('DisruptionsController', function($scope, DisruptionsService, LinesService) {
    init();

    function init() {
      var disruptions = DisruptionsService.getDisruptions();

      // Note: This could also be done in the backend but would result in Disruptions having duplicate data - DH
      _.each(disruptions, function(disruption) {
        disruption.line = LinesService.getLineById(disruption.lineId);
        disruption.fromStation = LinesService.getStationInLineById(disruption.lineId, disruption.fromStationId);
        disruption.toStation = LinesService.getStationInLineById(disruption.lineId, disruption.toStationId);
      });

      angular.extend($scope, {
        disruptions: disruptions
      });
    }

  });
