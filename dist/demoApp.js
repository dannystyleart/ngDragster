(function () {
    'use strict';
    angular.module('demoApp', ['ng.dragster'])
    .run(['$ngDragster', function ($ngDragster) {
        console.log($ngDragster);
    }]);

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['demoApp'], {
            strictDi: false
        })
    })

})();