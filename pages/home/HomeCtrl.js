/**
 */

'use strict';

angular.module('myApp').controller('HomeCtrl', ['$scope', function ($scope) {

    // Generated JSON: http://beta.json-generator.com/FuuBOor
    var origSource = [
        {
            "id": "5570a94fc7f879acbb1ed224",
            "isActive": false,
            "group": "BMW",
            "name": {
                "first": "Andrews",
                "last": "Gordon"
            }
        },
        {
            "id": "5570a94f818033470314aa12",
            "isActive": true,
            "group": "Mercedes",
            "name": {
                "first": "Lorrie",
                "last": "Chandler"
            }
        },
        {
            "id": "5570a94fca50639a8a93c25f",
            "isActive": false,
            "group": "BMW",
            "name": {
                "first": "Mclean",
                "last": "Allen"
            }
        },
        {
            "id": "5570a94f26ac4b5092fb0122",
            "isActive": true,
            "group": "Monster",
            "name": {
                "first": "Neal",
                "last": "Powell"
            }
        },
        {
            "id": "5570a94f314060e1350ba1ea",
            "isActive": true,
            "group": "RedBull",
            "name": {
                "first": "Bernadette",
                "last": "Fuller"
            }
        },
        {
            "id": "5570a94f769c5cf945a4e4d7",
            "isActive": false,
            "group": "Alpine",
            "name": {
                "first": "Hart",
                "last": "Ruiz"
            }
        },
        {
            "id": "5570a94f2f6d5979e359038d",
            "isActive": false,
            "group": "Monster",
            "name": {
                "first": "Marlene",
                "last": "Griffith"
            }
        },
        {
            "id": "5570a94f5ef47f5335a40e88",
            "isActive": false,
            "group": "RedBull",
            "name": {
                "first": "Gardner",
                "last": "Cox"
            }
        },
        {
            "id": "5570a94ff857e61eb71a7dc3",
            "isActive": false,
            "group": "RedBull",
            "name": {
                "first": "Herman",
                "last": "Mcmillan"
            }
        },
        {
            "id": "5570a94f71937a7b45856048",
            "isActive": true,
            "group": "BMW",
            "name": {
                "first": "Potter",
                "last": "Beasley"
            }
        },
        {
            "id": "5570a94fda1bdd35d902e4f5",
            "isActive": false,
            "group": "BMW",
            "name": {
                "first": "Ava",
                "last": "Houston"
            }
        },
        {
            "id": "5570a94f920a7963c5693574",
            "isActive": false,
            "group": "Alpine",
            "name": {
                "first": "Leon",
                "last": "Schneider"
            }
        }
    ];

    $scope.racers = angular.copy(origSource);
    $scope.eventAttenders = [];

    function doAddRemove(from, to, what) {
        to.push(what);
        for (var i = 0; i < from.length; i++) {
            if (what.id === from[i].id) {
                from.splice(i, 1);
                break;
            }
        }
        $scope.$apply();
    };
    $scope.dragActive = true;
    $scope.handleEventAttend = function (drag) {
        doAddRemove($scope.racers, $scope.eventAttenders, drag.dragData);
    };
    $scope.handleBackToRoster = function (drag) {
        doAddRemove($scope.eventAttenders, $scope.racers, drag.dragData);
    };

}]);