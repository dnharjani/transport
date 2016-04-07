angular.module('transport')
  .service('ApiService', function (ApplicationConfigService, $http) {

    var apiUrl = ApplicationConfigService.get('apiURL');

    return {
      getDisruptions: getDisruptions,
      getLines: getLines
    };

    function getDisruptions() {
      return $http.get(apiUrl + 'disruptions').then(function(data){ return data.data});
    }

    function getLines() {
      return $http.get(apiUrl + 'lines').then(function(data){ return data.data});
    }

  });
