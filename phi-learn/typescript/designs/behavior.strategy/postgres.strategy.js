"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
var PostgresStrategy = /** @class */ (function () {
    function PostgresStrategy() {
    }
    PostgresStrategy.prototype.doAlgorithm = function (data) {
        console.log("Strategy Postgres");
        return data.reverse();
    };
    return PostgresStrategy;
}());
exports.default = PostgresStrategy;
