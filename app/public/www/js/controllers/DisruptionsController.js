angular.module('transport')
  .controller('DisruptionsController', function($scope, DisruptionsService, LinesService, $ionicModal) {
    init();

    function init() {
      var disruptions = DisruptionsService.getDisruptions();

      // Note: This could also be done in the backend but would result in Disruptions having duplicate data - DH
      disruptions = mergeLinesIntoDisruptions(disruptions);

      $ionicModal.fromTemplateUrl('../../templates/internal/modals/new-disruption-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      angular.extend($scope, {
        disruptions: disruptions,
        lines: LinesService.getLines(),
        newDisruption: null,

        refreshDisruptions: refreshDisruptions,
        removeDisruption: removeDisruption,
        addDisruption: addDisruption,
        addNewDisruption: addNewDisruption,
        clearNewDisruption: clearNewDisruption,
        openNewDisruptionModal: openNewDisruptionModal,
        closeNewDisruptionModal: closeNewDisruptionModal
      });
    }

    function mergeLinesIntoDisruptions(disruptions) {
      _.each(disruptions, function(disruption) {
        disruption.line = LinesService.getLineById(disruption.lineId);
        disruption.fromStation = LinesService.getStationInLineById(disruption.lineId, disruption.fromStationId);
        disruption.toStation = LinesService.getStationInLineById(disruption.lineId, disruption.toStationId);
      });

      return disruptions;
    }

    function refreshDisruptions() {
      DisruptionsService.refreshDisruptions()
        .then(function(){
          $scope.disruptions = mergeLinesIntoDisruptions(DisruptionsService.getDisruptions());
          $scope.$broadcast('scroll.refreshComplete');
        });
    }

    function removeDisruption(disruptionId) {
      DisruptionsService.removeDisruption(disruptionId)
        .then(function(){
          $scope.disruptions = mergeLinesIntoDisruptions(DisruptionsService.getDisruptions());
        });
    }

    function addDisruption() {
      closeNewDisruptionModal();

      DisruptionsService.addDisruption($scope.newDisruption.lineId, $scope.newDisruption.fromStationId, $scope.newDisruption.toStationId, $scope.newDisruption.fromDate, $scope.newDisruption.toDate, $scope.newDisruption.reason)
        .then(function(){
          $scope.disruptions = mergeLinesIntoDisruptions(DisruptionsService.getDisruptions());
          clearNewDisruption();
        });
    }

    function addNewDisruption() {
      $scope.newDisruption = {
        lineId: 1,
        fromStationId: 1,
        toStationId: 2,
        fromDate: null,
        toDate: null,
        reason: null
      };

      openNewDisruptionModal();
    }

    function clearNewDisruption() {
      $scope.newDisruption = null;
    }

    function openNewDisruptionModal() {
      $scope.modal.show();
    }

    function closeNewDisruptionModal() {
      $scope.modal.hide();
    }

    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
  });
