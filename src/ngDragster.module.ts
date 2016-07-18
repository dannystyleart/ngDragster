import {DropZoneComponent} from './dropzone/dropZone.component';
import {DragItem} from './dragitem/dragItem.component';
import {ngDragsterProvider} from './common/ngDragster.provider';

export let ngDragster = angular.module('ng.dragster', [])
    .provider('$ngDragster', ngDragsterProvider)
    .component('dragItem', DragItem.create())
    .component('dropZone', DropZoneComponent.create());
