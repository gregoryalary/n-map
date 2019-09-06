"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var index_1 = require("../index");
describe('nmap function', function () {
    // Success
    it('should return an array of empty array when the input is an empty array', function () {
        var result = index_1.nmap(2).bind([function (elt) { return elt; }, function (elt) { return elt; }]).map([]);
        chai_1.expect(result).to.eql([
            [], []
        ]);
    });
    it('should return a classic map result when the n = 1', function () {
        var result = index_1.nmap(1).bind([function (elt) { return elt + 1; }]).map([1, 2, 3]);
        chai_1.expect(result).to.eql([[2, 3, 4]]);
    });
    it('should return an array with decremented value and another with incremented value', function () {
        var result = index_1.nmap(2).bind([
            function (elt) { return elt - 1; },
            function (elt) { return elt + 1; }
        ]).map([1, 2, 3]);
        chai_1.expect(result).to.eql([
            [0, 1, 2],
            [2, 3, 4]
        ]);
    });
    it('should return an array with decremented value and another with the string representation of the number', function () {
        var result = index_1.nmap(2).bind([
            function (elt) { return elt - 1; },
            function (elt) { return String(elt); }
        ]).map([1, 2, 3]);
        chai_1.expect(result).to.eql([
            [0, 1, 2],
            ['1', '2', '3']
        ]);
    });
    // Exceptions
    it('should raise an exception because there is not enough callbacks', function () {
        chai_1.assert.throws(function () {
            index_1.nmap(10).bind([]);
        });
    });
    it('should raise an exception because there is too much callbacks', function () {
        chai_1.assert.throws(function () {
            index_1.nmap(1).bind([
                function (elt) { return elt - 1; },
                function (elt) { return String(elt); }
            ]);
        });
    });
    it('should raise an exception because there is no callback to bind', function () {
        chai_1.assert.throws(function () {
            index_1.nmap(0).bind([function (elt) { return elt; }]);
        });
    });
});
