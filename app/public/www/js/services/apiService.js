angular.module('transport')
  .service('ApiService', function (ApplicationConfigService, $http) {

    var apiUrl = ApplicationConfigService.get('apiURL');

    return {
      apiUrl: apiUrl,
      getDisruptions: getDisruptions,
      removeDisruption: removeDisruption,
      addDisruption: addDisruption,
      getLines: getLines
    };

    function getDisruptions() {
      return $http.get(apiUrl + 'disruptions').then(function(data){ return data.data});
    }

    function getLines() {
      return $http.get(apiUrl + 'lines').then(function(data){ return data.data});
    }

    function removeDisruption(disruptionId) {
      return $http.delete(apiUrl + 'disruption/'+disruptionId);
    }

    function addDisruption(lineId, fromStationId, toStationId, fromDate, toDate, reason) {
      return $http.post(apiUrl + 'disruption', {
        lineId: lineId,
        fromStationId: fromStationId,
        toStationId: toStationId,
        fromDate: fromDate,
        toDate: toDate,
        reason: reason
      });
    }
  });
