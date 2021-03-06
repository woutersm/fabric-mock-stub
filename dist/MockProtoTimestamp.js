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
var timestamp_pb_1 = require("google-protobuf/google/protobuf/timestamp_pb");
var MockProtoTimestamp = /** @class */ (function (_super) {
    __extends(MockProtoTimestamp, _super);
    function MockProtoTimestamp() {
        var _this = _super.call(this) || this;
        _this.seconds = Math.floor(Date.now() / 1000);
        return _this;
    }
    MockProtoTimestamp.prototype.getSeconds = function () {
        return this.seconds;
    };
    MockProtoTimestamp.prototype.toDate = function () {
        return new Date(this.seconds);
    };
    return MockProtoTimestamp;
}(timestamp_pb_1.Timestamp));
exports.MockProtoTimestamp = MockProtoTimestamp;
//# sourceMappingURL=MockProtoTimestamp.js.map