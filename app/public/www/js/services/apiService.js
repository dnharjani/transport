angular.module('transport')
  .service('ApiService', function (ApplicationConfigService, $http) {
    var apiUrl = ApplicationConfigService.get('apiUrl');

    return {
      getDisruptions: getDisruptions
    };

    function getDisruptions() {
      return $http.get(apiUrl + 'disruptions');
    }

  });
