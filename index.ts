import {Nmapper} from "./lib/nmapper.class";

/**
 * Return a mapper that will map an array into n other arrays
 * @param n the number of array in the result
 */
export function nmap<T>(n: number): Nmapper<T> {
    return new Nmapper<T>(n);
}
