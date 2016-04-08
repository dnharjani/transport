angular.module('transport')
  .controller('DisruptionsController', function($scope, DisruptionsService, LinesService) {
    init();

    function init() {
      var disruptions = DisruptionsService.getDisruptions();
      var lines = LinesService.getLines();
      disruptions = DisruptionsService.populateStationsFromLines(disruptions);



      angular.extend($scope, {
        disruptions: disruptions
      });
    }

  });
