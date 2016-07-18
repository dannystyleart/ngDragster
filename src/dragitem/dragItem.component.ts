export class DragItem{

    static $inject = ['$ngDragster'];
    static create(){
        return {
            template: '<h1>{{$ctrl.name}}</h1>',
            controller: [DragItem]
        }
    }

    name:string;

    constructor(private $ngDragster){
        this.name = 'DragItem';
        console.log(this.$ngDragster);
    }
}