angular.module('transport')
  .service('ErrorService', function ($ionicPopup) {

    return {
      showError: showError
    };

    function showError(title, message) {
      $ionicPopup.alert({
        title: title,
        template: message
      });
    }
  });
