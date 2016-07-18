const ngDragsterSettings = {
    dragItemClasses: {},
    dropZoneClasses: {}
};
export class ngDragsterProvider{

    dragItemClasses: any;
    dropZoneClasses: any;

    constructor(){

        this.dragItemClasses = {
            base: '',
            hover: '',
            disabled: ''
        };
        this.dropZoneClasses = {
            base: '',
            hover: '',
            disabled: ''
        };

    }

    $get(){
        return ngDragsterSettings;
    }
}