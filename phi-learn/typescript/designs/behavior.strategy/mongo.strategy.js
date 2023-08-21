"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
var MongoStrategy = /** @class */ (function () {
    function MongoStrategy() {
    }
    MongoStrategy.prototype.doAlgorithm = function (data) {
        console.log("Strategy Mongoose");
        return data.sort();
    };
    return MongoStrategy;
}());
exports.default = MongoStrategy;
