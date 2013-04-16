angular.module('App', [])
.controller('AppCtrl', function($scope) {
  $scope.steps = ['one', 'two', 'three'];
  $scope.stepIndex = 0;

  $scope.setCurrentStep = function(index) {
    $scope.stepIndex = index;
  }

  $scope.getCurrentStep = function() {
    return $scope.steps[$scope.stepIndex];
  }

  $scope.getNextLabel = function() {
    return ($scope.stepIndex === ($scope.steps.length - 1)) ? 'Submit' : 'Next'; 
  }

  $scope.handlePrevious = function() {
    $scope.stepIndex -= ($scope.stepIndex === 0) ? 0 : 1;
  }

  $scope.handleNext = function() {
    $scope.stepIndex += ($scope.stepIndex === ($scope.steps.length - 1)) ? 0 : 1; 
  }
});
