angular.module('App', ['ngAnimate', 'ui.bootstrap'])
    .controller('AppCtrl', function ($scope, $modal) {
        var app = this;

        app.closeAlert = function() {
            app.reason = null;
        };

        app.open = function() {
          var modalInstance = $modal.open({
            templateUrl: "partials/wizard.html",
            controller: "ModalCtrl",
            controllerAs: "modal",
          });

          modalInstance.result.then(function(data) {
            app.closeAlert();
            app.summary = data;
          }, function(reason) {
            app.reason = reason;
          })
        };
    })
    .controller('ModalCtrl', function($scope, $modalInstance) {
        var modal = this;

        modal.steps = ['one', 'two', 'three'];
        modal.step = 0;
        modal.wizard = {tacos: 2};

        modal.isFirstStep = function () {
          return modal.step === 0;
        };

        modal.isLastStep = function () {
          return modal.step === (modal.steps.length - 1);
        };

        modal.isCurrentStep = function (step) {
          return modal.step === step;
        };

        modal.setCurrentStep = function (step) {
          modal.step = step;
        };

        modal.getCurrentStep = function () {
          return modal.steps[modal.step];
        };

        modal.getNextLabel = function () {
          return (modal.isLastStep()) ? 'Submit' : 'Next';
        };

        modal.handlePrevious = function () {
          modal.step -= (modal.isFirstStep()) ? 0 : 1;
        };

        modal.handleNext = function (callback, data) {
          if (modal.isLastStep()) {
            callback(data);
          } else {
            modal.step += 1;
          }
        };
    });
