export function commaStringToArray(input:string):Array<string>{
    return input.split(',').map((chunk:string) => chunk.trim());
}