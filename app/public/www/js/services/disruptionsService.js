angular.module('transport')
  .service('DisruptionsService', function () {
    var disruptions = [];

    return {
      setDisruptions: setDisruptions,
      getDisruptions: getDisruptions
    };

    function setDisruptions(d) {
      disruptions = d;
    }

    function getDisruptions() {
      return disruptions;
    }
  });
