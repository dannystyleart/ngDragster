class DropZoneController{
    static $inject:Array<string> = ['$scope', '$ngDragster'];

    name:string;

    constructor(private $scope, private $ngDragster){
        this.name = "Dropzone / Droppable component";
        console.log(this.$ngDragster);
    }
}

export class DropZoneComponent{
    static create(){
        return {
            template: '<h1>{{$ctrl.name}}</h1>',
            controller: [DropZoneController]
        }
    }
}