"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Nmapper = /** @class */ (function () {
    function Nmapper(n) {
        this.count = n;
    }
    /**
     * Bind the callbacks of the mapper
     */
    Nmapper.prototype.bind = function (callbacks) {
        return new BindedNmapper(this.count, callbacks);
    };
    return Nmapper;
}());
exports.Nmapper = Nmapper;
/**
 * A NMapper object with callbacks to apply on an array
 */
var BindedNmapper = /** @class */ (function (_super) {
    __extends(BindedNmapper, _super);
    function BindedNmapper(count, callbacks) {
        var _this = _super.call(this, count) || this;
        _this.callbacks = [];
        if (!callbacks || callbacks.length !== _this.count) {
            throw new Error('Can\'t bind the callbacks array to the current Nmapper object.' +
                'Maybe the length differ from the size parameter of the object');
        }
        _this.callbacks = callbacks;
        return _this;
    }
    /**
     * Map the array into n other arrays if an array of callback is already set
     * @param array the array to map
     * @return the result of the mapping
     */
    BindedNmapper.prototype.map = function (array) {
        if (!this.callbacks || this.callbacks.length === 0 && this.count !== 0) {
            throw new Error('Can\'t map an array before the callbacks are set.');
        }
        else {
            return this.applyCallbacks(array);
        }
    };
    /**
     * Call the callbacks on each elements and build the result array
     * @param array the array to map
     * @return an array containing n other arrays
     */
    BindedNmapper.prototype.applyCallbacks = function (array) {
        var _this = this;
        return array.reduce(function (results, current) {
            return results.map(function (result, index) {
                return result.concat([_this.callbacks[index](current)]);
            });
        }, this.getAnArrayOfNEmptyArray());
    };
    /**
     * @return an array containing this.count empty any[]
     */
    BindedNmapper.prototype.getAnArrayOfNEmptyArray = function () {
        return Array.apply(null, new Array(this.count)).map(function () { return []; });
    };
    return BindedNmapper;
}(Nmapper));
