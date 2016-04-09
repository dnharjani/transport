angular.module('transport')
  .service('ErrorService', function ($ionicPopup) {

    return {
      showError: showError
    };

    function showError(title, err) {
      $ionicPopup.alert({
        title: title
      });
    }
  });
