angular.module('transport')
  .service('DisruptionsService', function () {
    var disruptions = {};

    return {
      disruptions: disruptions
    };
  });
