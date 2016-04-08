angular.module('transport')
  .service('LinesService', function () {
    var lines = [];

    return {
      setLines: setLines,
      getLines: getLines,
      getLineById: getLineById,
      getStationInLineById: getStationInLineById
    };

    function setLines(l) {
      lines = l;
    }

    function getLines() {
      return lines;
    }

    function getLineById(lId) {
      return _.findWhere(lines, {id: lId});
    }

    function getStationInLineById(lineId, stationId) {
      var line = getLineById(lineId);
      var station;

      if(line && line.stations) {
        station = _.findWhere(line.stations, {id: stationId});
      }

      return station;
    }
  });
