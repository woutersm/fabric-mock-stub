"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @hidden
 */
var MockHistoryQueryIterator = /** @class */ (function () {
    function MockHistoryQueryIterator(data, txID) {
        this.data = data;
        this.txID = txID;
        this.currentLoc = 0;
        this.closed = false;
    }
    Object.defineProperty(MockHistoryQueryIterator.prototype, "response", {
        get: function () {
            return {
                results: this.data,
                has_more: this.data.length - (this.currentLoc + 1) >= 0,
                metadata: Buffer.from(''),
                id: 'mockId'
            };
        },
        enumerable: true,
        configurable: true
    });
    MockHistoryQueryIterator.prototype.next = function () {
        if (this.closed) {
            throw new Error('Iterator has already been closed');
        }
        this.currentLoc++;
        return Promise.resolve({
            value: this.data[this.currentLoc - 1],
            done: this.data.length <= this.currentLoc
        });
    };
    MockHistoryQueryIterator.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.closed = true;
                return [2 /*return*/];
            });
        });
    };
    MockHistoryQueryIterator.prototype.addListener = function (event, listener) {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.on = function (event, listener) {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.once = function (event, listener) {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.prependListener = function (event, listener) {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.prependOnceListener = function (event, listener) {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.removeListener = function (event, listener) {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.off = function (event, listener) {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.removeAllListeners = function (event) {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.setMaxListeners = function (n) {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.getMaxListeners = function () {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.listeners = function (event) {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.rawListeners = function (event) {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.eventNames = function () {
        throw new Error('Method not implemented.');
    };
    MockHistoryQueryIterator.prototype.listenerCount = function (type) {
        throw new Error('Method not implemented.');
    };
    return MockHistoryQueryIterator;
}());
exports.MockHistoryQueryIterator = MockHistoryQueryIterator;
//# sourceMappingURL=MockHistoryQueryIterator.js.map