"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nmapper_class_1 = require("./lib/nmapper.class");
/**
 * Return a mapper that will map an array into n other arrays
 * @param n the number of array in the result
 */
function nmap(n) {
    return new nmapper_class_1.Nmapper(n);
}
exports.nmap = nmap;
