export function commaStringToArray(input:string):Array<string>{
    return input.split(',').map((chunk:string) => chunk.trim());
}
export function arrayInsert(stack: Array<any>, element: any, index: number):Array<any>{
    stack.splice(index, 0, element);
    return stack;
}