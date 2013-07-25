/**
 * Created with JetBrains WebStorm.
 * User: Ge
 * Date: 7/18/13
 * Time: 11:01 AM
 * To change this template use File | Settings | File Templates.
 */
;(function(ng){
   'use strict';

    var module = ng.module('MyModule.Filter',[]);

    //define a filter provider
    (function(){
       function myFilter(){
           return function(name){
               return 'Hello, ' + name +'!';
           }
       }

        module.filter('greetFilter',[myFilter]);
    })();

     //define a controller provider
    (function(){
        function myController($scope){
            $scope.inputVal='Anthony';
        }

        module.controller('myFilterController',['$scope',myController]);
    })();

    var valueModule = ng.module("MyModule.Value",[]);
    valueModule.value('greeter',{
        salutation: 'Hello',
        localize: function(localization) {
            this.salutation = localization.salutation;
        },
        greet: function(name) {
            return this.salutation + ' ' + name + '!';
        }
    });

    var dirModule = ng.module('MyModule.directive',[]);
    var filterModule = ng.module('MyModule.filter2',[]);
    var serviceModule = ng.module('MyModule',['MyModule.Value','MyModule.directive','MyModule.filter2']);
/*
    (function(){
        function RunFunction(greeter,user){
            greeter.localize({
                salutation: 'Bonjour'
            });
            user.load('World');
        }

        serviceModule.run([RunFunction]);
    })();*/
    serviceModule.run(function(greeter, user) {
        // This is effectively part of the main method initialization code
        greeter.localize({
            salutation: 'Bonjour'
        });
        user.load('World');
    })

   /* (function(){
        function xmp1Controller($scope){
            $scope.greeting = greeter.greet(user.name);
        }
        serviceModule.controller('valueController',['$scope',xmp1Controller]);
    })();*/
    var XmplController = function($scope, greeter, user) {
        $scope.greeting = greeter.greet(user.name);
    }
})(angular);