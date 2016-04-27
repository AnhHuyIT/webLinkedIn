var Background = angular.module('Background', ['ngSanitize']);

Background.controller('BackgroundCtrl', function ($scope, $http) {
  $http.get('JS/background.json').success(function(data) {
    $scope.background = data;
  });
});