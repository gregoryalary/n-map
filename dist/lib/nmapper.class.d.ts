export declare class Nmapper<T> {
    protected readonly count: number;
    constructor(n: number);
    /**
     * Bind the callbacks of the mapper
     */
    bind(callbacks: Array<(elt: T) => any>): BindedNmapper<T>;
}
/**
 * A NMapper object with callbacks to apply on an array
 */
declare class BindedNmapper<T> extends Nmapper<T> {
    private readonly callbacks;
    constructor(count: number, callbacks: Array<(elt: T) => any>);
    /**
     * Map the array into n other arrays if an array of callback is already set
     * @param array the array to map
     * @return the result of the mapping
     */
    map(array: Array<T>): Array<any[]>;
    /**
     * Call the callbacks on each elements and build the result array
     * @param array the array to map
     * @return an array containing n other arrays
     */
    private applyCallbacks;
    /**
     * @return an array containing this.count empty any[]
     */
    private getAnArrayOfNEmptyArray;
}
export {};
