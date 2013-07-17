; (function (ng) {
    'use strict';
    var module = $ng.module('myModule',[]);

    (function($ng,$module){
         function Controller($scope){
             var $this =this;
             this.$scope = $scope;
             $scope.format='M/dd/yy h:mm:ss a';

             return this;
         }

        $module.controller('Ctrl2',['$scope'],Controller);
    })(ng,module);

    (function($ng,$module){
            function myDirective($scope,$timeout,dateFilter){
                var $this =this;
                this.$scope = $scope;
                var format,  // date format
                    timeoutId; // timeoutId, so that we can cancel the time updates

                // used to update the UI
                function updateTime() {
                    element.text(dateFilter(new Date(), format));
                }

                // watch the expression, and update the UI on change.
                scope.$watch(attrs.myCurrentTime, function(value) {
                    format = value;
                    updateTime();
                });

                // schedule update in one second
                function updateLater() {
                    // save the timeoutId for canceling
                    timeoutId = $timeout(function() {
                        updateTime(); // update DOM
                        updateLater(); // schedule another update
                    }, 1000);
                }

                // listen on DOM destroy (removal) event, and cancel the next UI update
                // to prevent updating time after the DOM element was removed.
                element.bind('$destroy', function() {
                    $timeout.cancel(timeoutId);
                });

                updateLater(); // kick off the UI update process.

                return this;
            }
        $module.directive('myCurrentTime',['$scope','$timeout','dateFilter'],myDirective) ;
    })(ng,module);
})(angular);
