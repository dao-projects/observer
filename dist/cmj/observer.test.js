"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestClass = void 0;
const observer_1 = __importDefault(require("./observer"));
class TestClass extends observer_1.default {
    _value = 1;
    constructor() {
        super();
    }
    inc() {
        this._value++;
        this.fire('inc', {
            value: this._value
        });
    }
    dec() {
        this._value--;
        this.fire('dev', {
            val: this._value
        });
    }
}
exports.TestClass = TestClass;
