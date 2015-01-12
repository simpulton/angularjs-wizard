angular.module('App', ['ngAnimate', 'ui.bootstrap'])
    .controller('AppCtrl', function ($modal) {
        var app = this;
        
        // function assignment
        app.closeAlert = closeAlert;
        app.open = open;
        
        // function declaration
        function closeAlert() {
            app.reason = null;
        };

        function open() {
            var modalInstance = $modal.open({
                templateUrl: 'partials/wizard.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });

            modalInstance.result
                .then(function (data) {
                    app.closeAlert();
                    app.summary = data;
                }, function (reason) {
                    app.reason = reason;
                });
        };
    })
    .controller('ModalCtrl', function ($modalInstance) {
        var modal = this;

        // variable assignment
        modal.steps = ['one', 'two', 'three'];
        modal.step = 0;
        modal.wizard = {tacos: 2};
        
        // function assignment
        modal.isFirstStep = isFirstStep;
        modal.isLastStep = isLastStep;
        modal.isCurrentStep = isCurrentStep;
        modal.setCurrentStep = setCurrentStep;
        modal.getCurrentStep = getCurrentStep;
        modal.getNextLabel = getNextLabel;
        modal.handlePrevious = handlePrevious;
        modal.handleNext = handleNext;
        modal.dismiss = $modalInstance.dismiss;
        
        
        // function declaration
        function isFirstStep() {
            return modal.step === 0;
        }

        function isLastStep() {
            return modal.step === (modal.steps.length - 1);
        }

        function isCurrentStep(step) {
            return modal.step === step;
        }

        function setCurrentStep(step) {
            modal.step = step;
        }

        function getCurrentStep() {
            return modal.steps[modal.step];
        }

        function getNextLabel() {
            return (modal.isLastStep()) ? 'Submit' : 'Next';
        }

        function handlePrevious() {
            modal.step -= (modal.isFirstStep()) ? 0 : 1;
        }

        function handleNext() {
            if (modal.isLastStep()) {
                $modalInstance.close(modal.wizard);
            } else {
                modal.step += 1;
            }
        }
    });
