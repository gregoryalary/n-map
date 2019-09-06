export class Nmapper<T> {

    protected readonly count: number;

    constructor(n: number) {
        this.count = n;
    }

    /**
     * Bind the callbacks of the mapper
     */
    public bind(callbacks: Array<(elt: T) => any>): BindedNmapper<T> {
        return new BindedNmapper<T>(this.count, callbacks);
    }

}

/**
 * A NMapper object with callbacks to apply on an array
 */
class BindedNmapper<T> extends Nmapper<T> {

    private readonly callbacks: Array<(elt: T) => any> = [];

    constructor(count: number, callbacks: Array<(elt: T) => any>) {
        super(count);
        if (!callbacks || callbacks.length !== this.count) {
            throw new Error(
                'Can\'t bind the callbacks array to the current Nmapper object.' +
                'Maybe the length differs from the size parameter of the object');
        }
        this.callbacks = callbacks;
    }

    /**
     * Map the array into n other arrays if an array of callback is already set
     * @param array the array to map
     * @return the result of the mapping
     */
    public map(array: Array<T>): Array<any[]> {
        if (!this.callbacks || this.callbacks.length === 0 && this.count !== 0) {
            throw new Error('Can\'t map an array before the callbacks are set.');
        } else {
            return this.applyCallbacks(array);
        }
    }

    /**
     * Call the callbacks on each elements and build the result array
     * @param array the array to map
     * @return an array containing n other arrays
     */
    private applyCallbacks(array: Array<T>): Array<any[]> {
        return array.reduce((results: Array<any[]>, current: T): Array<any[]> => {
            return results.map((result: any[], index: number): any[] => {
                return result.concat([this.callbacks[index](current)]);
            });
        }, this.getAnArrayOfNEmptyArray());
    }

    /**
     * @return an array containing this.count empty any[]
     */
    private getAnArrayOfNEmptyArray(): Array<any[]> {
        return Array.apply(null, new Array(this.count)).map(() => []);
    }

}
