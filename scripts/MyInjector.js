/**
 * Created with JetBrains WebStorm.
 * User: Ge
 * Date: 7/19/13
 * Time: 8:30 AM
 * To change this template use File | Settings | File Templates.
 */
// Provide the wiring information in a module
angular.module('myModule', []).

    // Teach the injector how to build a 'greeter'
    // Notice that greeter itself is dependent on '$window'
    factory('greeter', function($window) {
        // This is a factory function, and is responsible for
        // creating the 'greet' service.
        return {
            greet: function(text) {
                $window.alert(text);
            }
        };
    });

// New injector is created from the module.
// (This is usually done automatically by angular bootstrap)
var injector = angular.injector(['myModule', 'ng']);

// Request any dependency from the injector
var greeter = injector.get('greeter');
greeter.greet('Hello Anthony');