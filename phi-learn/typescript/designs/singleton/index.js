"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonClass = /** @class */ (function () {
    function SingletonClass() {
    }
    SingletonClass.getInstance = function () {
        if (!SingletonClass.instance) {
            SingletonClass.instance = new SingletonClass();
        }
        return SingletonClass.instance;
    };
    return SingletonClass;
}());

exports.default = SingletonClass;
