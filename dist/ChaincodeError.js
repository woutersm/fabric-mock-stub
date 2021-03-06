"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
/**
 * ChaincodeError
 */
var ChaincodeError = /** @class */ (function (_super) {
    __extends(ChaincodeError, _super);
    function ChaincodeError(key, data, stack) {
        var _this = _super.call(this, key) || this;
        if (!_.isUndefined(stack)) {
            _this.stack = stack;
        }
        _this.data = data || {};
        return _this;
    }
    Object.defineProperty(ChaincodeError.prototype, "serialized", {
        get: function () {
            return JSON.stringify({
                'key': this.message,
                'data': this.data,
                'stack': this.stack
            });
        },
        enumerable: true,
        configurable: true
    });
    return ChaincodeError;
}(Error));
exports.ChaincodeError = ChaincodeError;
//# sourceMappingURL=ChaincodeError.js.map