angular.module('transport')
  .service('DisruptionsService', function (ApiService, $q) {
    var disruptions = [];

    return {
      setDisruptions: setDisruptions,
      getDisruptions: getDisruptions,
      addDisruption: addDisruption,
      removeDisruption: removeDisruption
    };

    function setDisruptions(d) {
      disruptions = d;
    }

    function getDisruptions() {
      return disruptions;
    }

    function addDisruption(newDisruption) {
        disruptions.push(newDisruption);
    }

    function removeDisruption(disruptionId) {
        disruptions = _.reject(disruptions, function(disruption) {
          return disruption.id === disruptionId;
        });
    }
  });
