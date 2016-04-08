angular.module('transport')
  .service('DisruptionsService', function (LinesService) {
    var disruptions = {};

    return {
      setDisruptions: setDisruptions,
      getDisruptions: getDisruptions,
      populateStationsFromLines: populateStationsFromLines
    };

    function setDisruptions(d) {
      disruptions = d;
    }

    function getDisruptions() {
      return disruptions;
    }

    // Note: This could also be done in the backend but would result in Disruptions having duplicate data - DH
    function populateStationsFromLines(disruptions) {
      _.each(disruptions, function(disruption) {
        disruption.line = LinesService.getLineById(disruption.lineId);
        disruption.fromStation = LinesService.getStationInLineById(disruption.lineId, disruption.fromStationId);
        disruption.toStation = LinesService.getStationInLineById(disruption.lineId, disruption.toStationId);
      });
    }
  });
