angular.module('transport')
  .service('ApiService', function (ApplicationConfigService, $http) {

    var apiUrl = ApplicationConfigService.get('apiURL');

    return {
      getDisruptions: getDisruptions,
      removeDisruption: removeDisruption,
      addDisruption: addDisruption,
      updateDisruption: updateDisruption,
      getLines: getLines
    };

    function getDisruptions() {
      return $http.get(apiUrl + 'disruptions').then(function(data){ return data.data});
    }

    function getLines() {
      return $http.get(apiUrl + 'lines').then(function(data){ return data.data});
    }

    function removeDisruption(disruptionId) {
      return $http.delete(apiUrl + 'disruptions/'+disruptionId);
    }

    function addDisruption(lineId, fromStationId, toStationId, fromDate, toDate) {
      return $http.post(apiUrl + 'disruptions/');
    }

    function updateDisruption(disruptionId, toDate) {
      return $http.put(apiUrl + 'disruptions/'+disruptionId);
    }
  });
