/**
 * Created with JetBrains WebStorm.
 * User: Ge
 * Date: 7/23/13
 * Time: 10:58 PM
 * To change this template use File | Settings | File Templates.
 */
;(function(ng){
    'use strict';

    var module = ng.module('MyModule.Moment',[]);

    (function(){
        function myController($scope){
            $scope.TestTime = moment("2013-07-24 06:12:23.309","YYYY-MM-DDTHH:mm:ss Z").format('MM/DD/YYYY HH:mm:ss');
        }

        module.controller('myMoment',['$scope',myController]);
    })();
})(angular);