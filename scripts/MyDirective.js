
; (function (ng) {
    'use strict';
    var module = ng.module('myModuleDirective',[]);

    (function(){
        function Controller($scope){
            $scope.format='M/dd/yy h:mm:ss a';
        }

        $module.controller('Ctrl2',['$scope',Controller]);
    })();

    (function($ng,$module){
            function myDirective($timeout, dateFilter){
               return function(scope, element, attrs){
                    var format,  // date format
                        timeoutId; // timeoutId, so that we can cancel the time updates

                    // used to update the UI
                    function updateTime() {
                        element.text(dateFilter(new Date(), format));
                    }

                    // watch the expression, and update the UI on change.
                    scope.$watch(attrs.myTime, function(value) {
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
                }
            }
        $module.directive('myTime',['$timeout','dateFilter',myDirective]) ;
    })(ng,module);
})(angular);
