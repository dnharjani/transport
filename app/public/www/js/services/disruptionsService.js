angular.module('transport')
  .service('DisruptionsService', function (ApiService, $q, ErrorService) {
    var disruptions = [];

    return {
      setDisruptions: setDisruptions,
      getDisruptions: getDisruptions,
      addDisruption: addDisruption,
      removeDisruption: removeDisruption,
      refreshDisruptions: refreshDisruptions
    };

    function setDisruptions(d) {
      disruptions = d;
    }

    function getDisruptions() {
      return disruptions;
    }

    function refreshDisruptions() {
      return ApiService.getDisruptions().then(function(d) {
        disruptions = d;
      });
    }

    function addDisruption(lineId, fromStationId, toStationId, fromDate, toDate, reason) {
      return ApiService.addDisruption(lineId, fromStationId, toStationId, fromDate, toDate, reason).then(function(newDisruption){
        disruptions.push(newDisruption);
      })
      .catch(function(err) {
        ErrorService.showError('Error adding Disruption', err);
      });
    }

    function removeDisruption(disruptionId) {
      return ApiService.removeDisruption().then(function(){
        disruptions = _.reject(disruptions, function(disruption) {
          return disruption.id === disruptionId;
        });
      })
      .catch(function(err) {
        ErrorService.showError('Error removing Disruption', err);
      });
    }
  });
