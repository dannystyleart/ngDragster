module ngDragdropComponent {
    'use strict';

    export interface INgDropzoneAttrs extends ng.IAttributes {
        dropHandler?:string;
        dropGroup: string;
    }

    export class ngDropzoneClasses {
        constructor(public value:string) {

        }

        public static DROPPABLE = new ngDropzoneClasses('ng-dropzone-hover');
        public static DRAG_OVER = new ngDropzoneClasses('ng-dropzone-droppable');
    }

    export class ngDropzoneEventNames {
        constructor(value:string) {

        }

        public static DRAG_STAR = new ngDropzoneEventNames('ngDragster.dragging:start');
        public static DRAG_END = new ngDropzoneEventNames('ngDragster.dragging:end');
    }

    class ngDropZone {

        dropHandler:Function = angular.noop;
        dropGroup:Array<string>;

        constructor(private $parse:ng.IParseService,
                    private $rootScope:ng.IRootScopeService,
                    public $scope:ng.IScope,
                    private $element:ng.IAugmentedJQuery,
                    private $attrs:INgDropzoneAttrs) {

            this.initialize();
        }

        initialize():void {
            if (angular.isDefined(this.$attrs.dropHandler)) {
                this.dropHandler = this.$parse(this.$attrs.dropHandler);
            }
            if (angular.isDefined(this.$attrs.dropGroup) && this.$attrs.dropGroup.length > 0) {
                this.dropGroup = ngDragdropComponent.commaStringToArr(this.$attrs.dropGroup);
            }
        }

        /**
         * Proper event stopping
         * @param {JQueryEventObject} event
         */
        private stopEvent(event:JQueryEventObject):void {
            if (event.stopPropagation) event.stopPropagation();
            if (event.preventDefault) event.preventDefault();
            event.cancelBubble = true;
            event.returnValue = false;
        }

        bindEvents() {

        }

        onDragStart() {
        }

        onDragEnd() {
        }

        onDrop() {
        }

        private isValidTargetGroup(targetRules):boolean {
            return false;
        }

    }

    let ngDropzoneConfig = ['$parse', '$rootScope', function ($parse, $rootScope) {
        return {
            restrict: 'AC',
            link: ($scope, $element, $attrs) => {
                new ngDropZone($parse, $rootScope, $scope, $element, $attrs)
            }
        };
    }];

    angular.module('ngDragdrop');
}