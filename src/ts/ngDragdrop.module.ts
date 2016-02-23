module ngDragdropComponent {

    export function commaStringToArr(list:string):Array<string> {
        var arr = [],
            trimmedString;
        list.split(',').forEach((listItem:string) => {
            trimmedString = listItem.trim();
            if (trimmedString.length > 0) {
                arr.push(trimmedString);
            }
        });
        return arr;
    }

}