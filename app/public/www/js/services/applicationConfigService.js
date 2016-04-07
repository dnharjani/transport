angular.module('transport')
  .constant('ApplicationConfigService', function () {

    var config = {
      apiURL: '//localhost:9000/api/v1/'
    };

    function get(key) {
      var value = config[key];
      if (typeof value === 'undefined') {
        value = null;
      }
      return value;
    }

    return {
      get: get
    }
  }());
