/*!
 *  AngularJS HTML5 Drag & Drop module
 *
 *  @author     Dániel Sebestyén <dannystyleart@gmail.com>
 *  @url        http://github.com/dannystyleart/ngDragster.git
 *  @version    1.0.0
 *  @license    MIT
 *
 */
(function () {
    'use strict';

    // Classes applied on drag, dropzone elements
    var dragsterClasses = {
        dragOver: 'dragster--hover',
        droppable: 'dragster--dropzone'
    };

    var dragsterEvents = {
        start: 'ngDragster.dragging:start',
        end: 'ngDragster.dragging:end'
    };

    var splitTextByComma = function (list) {
        var arr = [];
        angular.forEach(list.split(','), function (listItem) {
            arr.push(listItem.trim());
        });
        return arr;
    };

    var matchAtLeastOneItem = function (listFrom, listTo) {
        for (var i = 0; i < listFrom.length; i++) {
            if (listTo.indexOf(listFrom[i]) >= 0) {
                return true;
                break;
            }
        };

        return false;
    };

    /**
     * @ngdoc directive
     * @name dragsterDrag
     *
     * @description
     * Creates draggable elements
     *
     * @param {string}   dragGroup   Can sepecify groups which the dragged elements belongs to Multiple groups could specified separated with comma.
     * @param {object}   dragData    Can specify data to pass to the dropzone which the element is dropped to.
     *
     * @restrict AC
     * */
    var dragsterDrag = ['$parse', '$rootScope', function ($parse, $rootScope) {

        return {
            restrict: 'AC',
            link: function (scope, element, attrs) {

                var dragDataContainer = {
                    dragData: (angular.isDefined(attrs.dragData)) ? scope.$eval(attrs.dragData) : undefined,
                    dragGroup: (angular.isDefined(attrs.dragGroup)) ? splitTextByComma(attrs.dragGroup) : undefined
                };

                // Handling dragstart event
                var dragsterStartDrag = function (e) {
                    $rootScope.$broadcast(dragsterEvents.start, dragDataContainer);
                    e.dataTransfer.setData('text', JSON.stringify(dragDataContainer));
                };

                // Handling dragend event
                var dragsterEndDrag = function (e) {
                    $rootScope.$broadcast(dragsterEvents.end, dragDataContainer);
                };
                // Magic happens, element become draggable
                element.attr('draggable', true);
                element.bind('dragstart', dragsterStartDrag);
                element.bind('dragend', dragsterEndDrag);

            }
        };
    }];

    /**
     * @ngdoc directive
     * @name dragsterDrag
     *
     * @description
     * Creates dropzone element
     *
     * @param {function}   dropHandler   Can specify a method that should called on drop event.
     * @param {string}     dropGroup     Can predefine which group should be accepted by the dropzone element. Multiple groups could specified separated with comma.
     *
     * @restrict AC
     * */
    var dragsterDropzone = ['$parse', '$rootScope', function ($parse, $rootScope) {

        return {
            restrict: 'AC',
            link: function (scope, element, attrs) {

                var dropHandler = angular.isDefined(attrs.dropHandler) ? $parse(attrs.dropHandler) : angular.noop;
                var dropGroup = angular.isDefined(attrs.dropGroup) ? splitTextByComma(attrs.dropGroup) : undefined;

                scope.$on(dragsterEvents.start, function(e, dragData){
                    element.addClass(dragsterClasses.droppable);
                });
                scope.$on(dragsterEvents.end, function(e){
                    element.removeClass(dragsterClasses.droppable);
                });

                var dropzoneDragover = function (e) {
                    e.preventDefault();
                    element.addClass(dragsterClasses.dragOver);
                };
                var dropzoneDragenter = function (e) {

                };
                var dropzoneDragleave = function (e) {
                    element.removeClass(dragsterClasses.dragOver);
                };
                var dropzoneDrop = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    element.removeClass(dragsterClasses.dragOver);
                    element.removeClass(dragsterClasses.droppable);
                    $rootScope.$broadcast(dragsterEvents.end);
                    var data = JSON.parse(e.dataTransfer.getData('text'));
                    if (angular.isDefined(dropGroup) && data.dragGroup && !matchAtLeastOneItem(dropGroup, data.dragGroup)) {
                        return false;
                    }

                    dropHandler(scope, {drag: data});
                };


                element.bind('dragover', dropzoneDragover);
                element.bind('dragenter', dropzoneDragenter);
                element.bind('dragleave', dropzoneDragleave);
                element.bind('drop', dropzoneDrop);


            }
        };
    }];

    angular.module('dannystyleart.angular-dragster', [])
        .directive('dragsterDrag', dragsterDrag)
        .directive('dragsterDropzone', dragsterDropzone);
})();