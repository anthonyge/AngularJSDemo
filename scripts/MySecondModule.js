/**
 * Created with JetBrains WebStorm.
 * User: Ge
 * Date: 7/18/13
 * Time: 1:45 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with JetBrains WebStorm.
 * User: Ge
 * Date: 7/18/13
 * Time: 11:01 AM
 * To change this template use File | Settings | File Templates.
 */
;
(function (ng) {
    'use strict';

    var valueModule = ng.module("MyModule.Value", []);
    valueModule.value('greeter', {
        salutation: 'Hello',
        localize: function (localization) {
            this.salutation = localization.salutation;
        },
        greet: function (name) {
            return this.salutation + ' ' + name + '!';
        }
    });

    valueModule.value('user', {
        load: function (name) {
            this.name = name;
        }
    });

   /* var dirModule = ng.module('MyModule.directive', []);
    var filterModule = ng.module('MyModule.filter2', []);
    var serviceModule = ng.module('MyModule', ['MyModule.Value', 'MyModule.directive', 'MyModule.filter2']);*/
    var serviceModule = ng.module('MyModule', ['MyModule.Value']);

    (function () {
        function RunFunction(greeter, user) {
            greeter.localize({
                salutation: 'Bonjour'
            });
            user.load('World');
        }

        serviceModule.run(['greeter', 'user', RunFunction]);
    })();

    (function () {
        function xmp1Controller($scope, greeter, user) {
            $scope.greeting = greeter.greet(user.name);
        }

        serviceModule.controller('valueController', ['$scope', 'greeter', 'user', xmp1Controller]);
    })();
})(angular);