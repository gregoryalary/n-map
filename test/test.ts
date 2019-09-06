import {expect, assert} from 'chai';
import {nmap} from "../index";

describe('nmap function', function () {

    // Success

    it('should return an array of empty array when the input is an empty array', (): void => {
        const result = nmap(2).bind([(elt) => elt, (elt) => elt]).map([]);
        expect(result).to.eql([
            [], []
        ]);
    });
    it('should return a classic map result when the n = 1', (): void => {
        const result = nmap<number>(1).bind([(elt: number): number => elt + 1]).map([1, 2, 3]);
        expect(result).to.eql([[2, 3, 4]]);
    });
    it('should return an array with decremented value and another with incremented value', (): void => {
        const result = nmap<number>(2).bind([
            (elt: number): number  => elt - 1,
            (elt: number): number  => elt + 1
        ]).map([1, 2, 3]);
        expect(result).to.eql([
            [0, 1, 2],
            [2, 3, 4]
        ]);
    });
    it('should return an array with decremented value and another with the string representation of the number', (): void => {
        const result = nmap<number>(2).bind([
            (elt: number): number  => elt - 1,
            (elt: number): string  => String(elt)
        ]).map([1, 2, 3]);
        expect(result).to.eql([
            [0, 1, 2],
            ['1', '2', '3']
        ]);
    });

    // Exceptions

    it('should raise an exception because there is not enough callbacks', (): void => {
        assert.throws(() => {
            nmap(10).bind([]);
        });
    });
    it('should raise an exception because there is too much callbacks', (): void => {
        assert.throws(() => {
            nmap<number>(1).bind([
                (elt: number): number  => elt - 1,
                (elt: number): string  => String(elt)
            ]);
        });
    });
    it('should raise an exception because there is no callback to bind', (): void => {
        assert.throws(() => {
            nmap(0).bind([(elt) => elt]);
        });
    });

});
